/**
 * Simple YAML frontmatter parser for CMS blog posts.
 * Parses markdown files with YAML frontmatter (between --- delimiters).
 */

export interface PostFrontmatter {
  title?: string;
  slug?: string;
  published?: boolean;
  date?: string;
  author?: string;
  category?: string;
  excerpt?: string;
  coverImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  [key: string]: unknown;
}

export interface ParsedPost {
  frontmatter: PostFrontmatter;
  body: string;
}

/**
 * Parse a markdown string that optionally has YAML frontmatter.
 * Handles the --- ... --- block at the top of the file.
 */
export function parseFrontmatter(raw: string): ParsedPost {
  const frontmatter: PostFrontmatter = {};
  let body = raw;

  // Match frontmatter block: --- ... ---
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/m);

  if (fmMatch) {
    const yamlBlock = fmMatch[1];
    body = fmMatch[2].trimStart();

    // Parse simple YAML key: value pairs
    for (const line of yamlBlock.split(/\r?\n/)) {
      const colonIdx = line.indexOf(":");
      if (colonIdx === -1) continue;

      const key = line.slice(0, colonIdx).trim();
      let value: string = line.slice(colonIdx + 1).trim();

      if (!key) continue;

      // Remove surrounding quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Parse booleans
      if (value === "true") {
        (frontmatter as Record<string, unknown>)[key] = true;
      } else if (value === "false") {
        (frontmatter as Record<string, unknown>)[key] = false;
      } else {
        (frontmatter as Record<string, unknown>)[key] = value;
      }
    }
  }

  return { frontmatter, body };
}

/**
 * Estimate read time based on word count.
 */
export function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/**
 * Format a date string to a readable format.
 */
export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
