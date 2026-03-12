/**
 * Extended BlogPost type that supports both hardcoded posts AND CMS-managed posts.
 * This is an additive extension — the original BlogPost type is unchanged.
 */
import type { BlogPost } from "./blogPosts";

export type ExtendedBlogPost = BlogPost & {
  /** True when this post was created via the CMS admin panel */
  _isCms?: boolean;
  /** Parsed HTML content from CMS markdown */
  _htmlContent?: string;
  /** SEO meta title from CMS (overrides title) */
  _metaTitle?: string;
  /** Canonical URL from CMS */
  _canonicalUrl?: string;
  /** Open Graph image from CMS */
  _ogImage?: string;
};
