# SimplyVastuShastra — CMS User Guide

This guide is for your SEO person or content writer. No technical knowledge required.

---

## Step 1 — One-Time Setup (do this only once)

Open a terminal and run:

```
npm install -g decap-server
```

This installs the local CMS server globally on your computer.

---

## Step 2 — Start the CMS (do this every time you want to write a blog)

1. Open a terminal
2. Navigate into the project folder:
   ```
   cd path/to/your/project/src/frontend
   ```
3. Run the single command:
   ```
   pnpm run blog
   ```

This starts both the CMS server and the development server at the same time.

4. Open your browser and go to:
   ```
   http://localhost:5173/admin
   ```
5. Click the **Login** button (no password needed locally)

You are now in the admin panel.

---

## Step 3 — Create a New Blog Post

1. In the admin panel, click **Blog Posts** in the left sidebar
2. Click the **New Blog Posts** button (top right)
3. Fill in all the fields (see below for what each field means)
4. When ready to publish, click **Publish** (top right)

The post is saved as a file in `src/content/posts/` and will be included in the next build.

---

## Field Reference

| Field | What it means | Example |
|---|---|---|
| **Title** | The main heading of the blog post | `10 Vastu Tips for Your Kitchen` |
| **Slug** | The URL of the post. Use lowercase, hyphens only, no spaces | `vastu-tips-for-kitchen` |
| **Publish Date** | The date that appears on the blog card | `2026-03-15` |
| **Author** | Name shown on the post | `Charru Gupta` |
| **Category** | The topic category | `Vastu Tips` or `Home Vastu` |
| **Cover Image** | The featured image shown on the blog card and top of the post | Upload a JPG or PNG |
| **Excerpt** | A short 1-2 sentence summary shown on the blog listing page | `Discover how to align your kitchen with Vastu principles...` |
| **Body** | The full blog content. You can use bold, headings, bullet points, etc. | — |
| **Meta Title** | The title shown in Google search results (keep under 60 characters) | `Vastu Tips for Kitchen | SimplyVastuShastra` |
| **Meta Description** | The description shown in Google search results (keep under 155 characters) | `Learn the top Vastu tips for your kitchen to bring health and prosperity...` |
| **Canonical URL** | Leave blank unless the post already exists on another website | — |
| **OG Image** | The image shown when sharing on WhatsApp/Facebook (leave blank to use cover image) | — |

---

## Recommended Blog Cover Image Size

- **Width:** 1200px
- **Height:** 630px (or 800px x 480px minimum)
- **Format:** JPG or PNG
- **File size:** Keep under 500KB for fast loading
- **Tip:** Use Canva or Photoshop to create images at exactly 1200x630px

Images uploaded through the CMS are automatically saved in the correct folder and will appear on the live website after building.

---

## How to Publish a Post Safely

1. Fill in all required fields: Title, Slug, Date, Excerpt, Body, Meta Title, Meta Description
2. Upload a cover image
3. Preview the post using the **Preview** button if available
4. Double-check the slug — once the post is live, do NOT change the slug (it will break the URL)
5. Click **Publish**
6. After publishing, run the build command to update the live website (see README.md)

---

## Important Rules

- **Never change the slug** of a published post. It breaks the existing URL and Google ranking.
- **Always add a meta title and meta description** for SEO.
- **Keep the meta title under 60 characters** and meta description under 155 characters.
- **Use the exact same slug format** — all lowercase, words separated by hyphens: `my-blog-post-title`
- The blog post will only appear on the website after you run `pnpm run build` and upload the `dist/` folder to Hostinger.

---

## Where Blog Images Are Stored

Images uploaded through the CMS are saved in:
```
src/frontend/public/assets/blog-images/
```

After building, they are automatically copied to:
```
dist/assets/blog-images/
```

This means they will work correctly when you upload the `dist/` folder to Hostinger.
