# SimplyVastuShastra — Blog Admin Panel

This folder contains the **Decap CMS** admin panel for managing blog posts.

## How to Use the Admin Panel Locally

### Step 1 — Install the Local Server (once only)
```bash
npm install -g decap-server
```

### Step 2 — Open Two Terminals

**Terminal 1** — Start the CMS proxy server:
```bash
cd C:\path\to\your\project\src\frontend
npx decap-server
```

**Terminal 2** — Start the website dev server:
```bash
cd C:\path\to\your\project\src\frontend
pnpm run dev
```

### Step 3 — Open the Admin Panel
Open your browser and go to:
```
http://localhost:5173/admin
```
Click **Login** (no password needed in local mode).

### Step 4 — Create a Blog Post
1. Click **"Blog Posts"** in the sidebar
2. Click **"New Blog Post"**
3. Fill in all the fields
4. Click **"Publish"** when done

### Step 5 — Build and Upload to Hostinger
```bash
cd C:\path\to\your\project\src\frontend
pnpm run build
```
Upload the entire `dist/` folder to Hostinger's `public_html`.

---

## Blog Post Fields Explained

| Field | Description |
|-------|-------------|
| **Title** | Full blog title shown on the page |
| **URL Slug** | URL-friendly name (e.g. `vastu-tips-for-bedroom`) |
| **Published** | Uncheck to save as draft |
| **Publish Date** | Date shown on the blog card |
| **Author Name** | Defaults to Charru Gupta |
| **Category** | Select the blog category |
| **Short Excerpt** | 1-2 sentences for the blog card |
| **Cover Image** | Upload 800x480 image |
| **Meta Title** | SEO title (under 60 characters) |
| **Meta Description** | SEO description (under 155 characters) |
| **Canonical URL** | Full URL, e.g. https://simplyvastushastra.com/blogs/your-slug |
| **Open Graph Image** | Image for WhatsApp/Facebook sharing |
| **Blog Content** | Full article in rich text |

---

## Blog Post Image Requirements

- **Cover Image**: 800px wide × 480px tall (JPG or PNG)
- **Open Graph Image**: 1200px wide × 630px tall (JPG or PNG)
- Images are saved in `public/assets/blog-images/` automatically

---

## Where Blog Posts Are Saved

Blog posts you create are saved as Markdown files in:
```
src/frontend/src/content/posts/your-slug.md
```

These files are bundled into the website when you run `pnpm run build`.
