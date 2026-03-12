/**
 * CMS Blog Posts Loader
 *
 * Loads blog posts written via Decap CMS admin panel.
 * Posts are stored as markdown files in src/content/posts/
 * and bundled at build time via Vite's import.meta.glob.
 *
 * These posts are MERGED with the existing BLOG_POSTS (hardcoded)
 * so existing content is never lost.
 */

import { marked } from "marked";
import React from "react";
import {
  estimateReadTime,
  formatDate,
  parseFrontmatter,
} from "../lib/parseFrontmatter";
import type { ExtendedBlogPost } from "./blogPostsExtended";

// Configure marked for safe HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Load all .md files from src/content/posts/ at build time
// biome-ignore lint/suspicious/noExplicitAny: glob typing
const postModules: Record<string, any> = import.meta.glob(
  "../content/posts/*.md",
  { query: "?raw", import: "default", eager: true },
);

/**
 * Parse all CMS markdown posts into ExtendedBlogPost objects.
 * Only returns posts where published !== false.
 */
export function loadCmsBlogPosts(): ExtendedBlogPost[] {
  const posts: ExtendedBlogPost[] = [];

  for (const [filePath, rawContent] of Object.entries(postModules)) {
    if (typeof rawContent !== "string") continue;

    const { frontmatter, body } = parseFrontmatter(rawContent);

    // Skip unpublished drafts
    if (frontmatter.published === false) continue;

    // Derive slug from filename if not in frontmatter
    const fileSlug = filePath.replace(/.*\//, "").replace(/\.md$/, "");
    const slug = (frontmatter.slug as string) || fileSlug;

    // Skip if no title (malformed post)
    if (!frontmatter.title) continue;

    // Convert markdown body to HTML
    const htmlContent = marked.parse(body) as string;

    // Build the ExtendedBlogPost object
    const post: ExtendedBlogPost = {
      slug,
      category: (frontmatter.category as string) || "Vastu Tips",
      title: frontmatter.title as string,
      excerpt: (frontmatter.excerpt as string) || "",
      readTime: estimateReadTime(body),
      date: frontmatter.date
        ? formatDate(frontmatter.date as string)
        : "Recent",
      author: (frontmatter.author as string) || "Charru Gupta",
      metaDescription:
        (frontmatter.metaDescription as string) ||
        (frontmatter.excerpt as string) ||
        "",
      keywords: [],
      coverImage:
        (frontmatter.coverImage as string) ||
        "/assets/generated/blog-vastu-tips.dim_800x480.jpg",
      // Placeholder content node — actual rendering uses _htmlContent
      content: React.createElement("div", {
        className: "blog-content cms-post",
      }),
      // CMS-specific fields
      _isCms: true,
      _htmlContent: htmlContent,
      _metaTitle:
        (frontmatter.metaTitle as string) || (frontmatter.title as string),
      _canonicalUrl: (frontmatter.canonicalUrl as string) || "",
      _ogImage:
        (frontmatter.ogImage as string) ||
        (frontmatter.coverImage as string) ||
        "",
    };

    posts.push(post);
  }

  // Sort by date descending (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return dateB - dateA;
  });

  return posts;
}

/** Singleton cache so we don't re-parse on every render */
let _cachedCmsPosts: ExtendedBlogPost[] | null = null;

export function getCmsBlogPosts(): ExtendedBlogPost[] {
  if (!_cachedCmsPosts) {
    _cachedCmsPosts = loadCmsBlogPosts();
  }
  return _cachedCmsPosts;
}
