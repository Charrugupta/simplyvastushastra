# SimplyVastuShastra

## Current State
A fully built premium multi-page React/Vite SPA for Simply Vastu Shastra. Has an existing blog system with 28+ hardcoded posts in `src/data/blogPosts.tsx`. Blog listing at `/blogs`, individual posts at `/blogs/{slug}`. All pages (Home, About, Services x3, Courses, Contact, Experience Centre, Cities, Areas We Serve) are complete and deployed. Hosted on Hostinger as a static dist build.

## Requested Changes (Diff)

### Add
- `public/admin/index.html` — Decap CMS admin panel UI (loads via CDN)
- `public/admin/config.yml` — CMS configuration with local_backend + git-gateway backend
- `public/assets/blog-images/` — directory for CMS-uploaded blog images
- `src/content/posts/*.md` — markdown blog posts created via CMS
- `src/lib/parseFrontmatter.ts` — frontmatter + read-time parser
- `src/data/blogPostsExtended.ts` — ExtendedBlogPost type adding CMS fields
- `src/data/cmsBlogPosts.ts` — Vite import.meta.glob loader for CMS posts
- `src/components/CmsBlogRenderer.tsx` — renders markdown HTML for CMS posts
- Sample CMS post: `vastu-tips-for-home-entrance.md`

### Modify
- `src/pages/BlogsPage.tsx` — merge CMS posts into listing (additive)
- `src/pages/BlogPostPage.tsx` — detect CMS posts + render markdown HTML (additive)

### Remove
- Nothing removed

## Implementation Plan
1. Install `marked` library for markdown-to-HTML conversion
2. Create Decap CMS admin panel at `/admin` (no backend changes needed)
3. Store CMS blog posts as markdown files in `src/content/posts/`
4. Use `import.meta.glob` to bundle CMS posts at build time
5. Merge CMS posts with existing hardcoded BLOG_POSTS
6. Render CMS post HTML content via `CmsBlogRenderer` component
7. All existing pages, styles, routing, SEO unchanged
