# SimplyVastuShastra — Project README

Full workflow guide for writing blogs, building the site, and deploying to Hostinger.

---

## Project Overview

- **Website:** https://simplyvastushastra.com
- **Tech Stack:** React + Vite (static site)
- **Hosting:** Hostinger (upload the `dist/` folder to `public_html`)
- **CMS:** Decap CMS (local, file-based)
- **Blog posts stored in:** `src/content/posts/*.md`
- **Build output:** `src/frontend/dist/`

---

## Writing a Blog Post

### One-time setup

```bash
npm install -g decap-server
```

### Every time you write a blog

1. Open a terminal and navigate to the frontend folder:
   ```bash
   cd src/frontend
   ```

2. Start everything with one command:
   ```bash
   pnpm run blog
   ```

3. Open browser: http://localhost:5173/admin

4. Click **Login** (no password needed locally)

5. Click **Blog Posts** > **New Blog Posts**

6. Fill in all fields, upload a cover image, write your content

7. Click **Publish**

8. Stop the server (Ctrl+C in the terminal) when done

See `CMS-USER-GUIDE.md` for a full explanation of every field.

---

## Building the Website

After writing new blog posts (or making any code changes), you must build the site before uploading to Hostinger.

```bash
cd src/frontend
pnpm install
pnpm run build
```

The build output will be in:
```
src/frontend/dist/
```

### What the build includes
- All existing blog posts (hardcoded)
- All CMS blog posts from `src/content/posts/`
- All images from `public/assets/generated/` and `public/assets/blog-images/`
- The `.htaccess` file for SPA routing and HTTPS redirect
- The `sitemap.xml` and `robots.txt`

---

## Uploading to Hostinger

1. Log in to your Hostinger control panel
2. Open **File Manager** and navigate to `public_html`
3. Delete the old contents of `public_html` (or rename for backup)
4. Upload the entire contents of the `dist/` folder to `public_html`
   - Upload all files and folders inside `dist/`, not the `dist/` folder itself
5. Make sure `.htaccess` is present in `public_html` after upload
   - Some FTP clients hide `.htaccess` — enable "show hidden files" if needed

---

## Testing That a Blog is Live

1. After uploading, open: `https://simplyvastushastra.com/blogs`
2. Your new blog post should appear in the listing
3. Click on the blog post card to open the full post
4. Check the URL matches the slug you set (e.g. `/blogs/my-post-slug`)
5. Check the meta title appears correctly in the browser tab
6. Share the URL on WhatsApp to verify the OG image and description appear

---

## Verifying Buttons and Navigation

After deployment, test the following on the live site:

- [ ] Home page loads correctly
- [ ] Header navigation links work: About, Services, Courses, Blog, Experience Centre, Contact
- [ ] Services dropdown shows Residential, Commercial, Industrial Vastu
- [ ] "Book Consultation" buttons on About page go to the Contact page
- [ ] "Book Consultation" buttons on Services pages go to the Contact page
- [ ] "Book Now" buttons on service cards go to the Contact page
- [ ] Contact form submits correctly (check Formspree dashboard)
- [ ] WhatsApp button opens correctly
- [ ] Blog listing at `/blogs` shows all posts
- [ ] Individual blog posts open at `/blogs/{slug}`
- [ ] Mobile menu works correctly

---

## Final Testing Checklist

### Writing a Blog
- [ ] Run `pnpm run blog` — both CMS server and dev server start
- [ ] Admin panel opens at http://localhost:5173/admin
- [ ] Can create a new post and fill all fields
- [ ] Cover image uploads successfully
- [ ] Post publishes and .md file appears in `src/content/posts/`

### Building
- [ ] Run `pnpm run build` inside `src/frontend/`
- [ ] No errors in the terminal
- [ ] `dist/` folder is created with all files
- [ ] `dist/assets/blog-images/` contains uploaded images
- [ ] `dist/.htaccess` is present

### Uploading to Hostinger
- [ ] All files from `dist/` uploaded to `public_html`
- [ ] `.htaccess` is visible in `public_html`

### Verifying the Blog
- [ ] `/blogs` page loads and shows all posts (existing + new)
- [ ] New blog post appears in the listing
- [ ] Blog post opens correctly at its slug URL
- [ ] Cover image loads on the blog post
- [ ] Meta title appears in browser tab

### Verifying Buttons
- [ ] "Book Consultation" on About page works
- [ ] "Book Consultation" on Services pages works
- [ ] "Book Now" on service cards works
- [ ] All header navigation links work

---

## Key File Locations

| What | Path |
|---|---|
| Blog posts (CMS) | `src/content/posts/*.md` |
| Blog posts (hardcoded) | `src/data/blogPosts.tsx` |
| Blog images (CMS uploads) | `public/assets/blog-images/` |
| Site images | `public/assets/generated/` |
| CMS config | `public/admin/config.yml` |
| Admin panel | `public/admin/index.html` |
| Build output | `dist/` |

---

## Important Notes

- **Never change a blog slug after publishing.** It breaks the URL and Google ranking.
- **Always rebuild and re-upload** after writing a new blog post.
- **Blog images** uploaded through the CMS are saved in `public/assets/blog-images/` and automatically included in the build.
- **Existing blog posts** (the original 28+ posts) are never affected by the CMS. They are stored in code and always included.
- **The `.htaccess` file** handles SPA routing. If pages return 404 errors after upload, check that `.htaccess` is in `public_html`.
