# How to Build and Upload to Hostinger (Windows)

## IMPORTANT: Why images may appear corrupt in the downloaded dist folder

When you download the project from Caffeine, the `dist/` folder inside may contain
stub/placeholder image files from the platform's deployment pipeline. These are NOT
the real images. You must always **delete the dist folder** and rebuild from source.

## Step-by-Step Build Instructions (Windows PowerShell)

### Step 1: Extract the downloaded ZIP
Extract to a folder, for example: `C:\Users\Charru Gupta\Downloads\simplyvastushastra`

### Step 2: Open PowerShell and navigate to the frontend folder
```powershell
cd "C:\Users\Charru Gupta\Downloads\simplyvastushastra\src\frontend"
```

> Important: You must be INSIDE the `src\frontend` folder, not the root folder.

### Step 3: Delete the old dist folder (if it exists)
```powershell
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
```

### Step 4: Install dependencies
```powershell
pnpm install
```

If pnpm is not installed, install it first:
```powershell
npm install -g pnpm
```

### Step 5: Run the build
```powershell
pnpm run build
```

You will see output like:
```
Copied 40 files from public/assets/generated -> dist/assets/generated
Copied favicon.ico
Copied .htaccess
All assets copied successfully. dist/ is ready for Hostinger upload.
```

### Step 6: Verify images are present
```powershell
ls dist\assets\generated
```
You should see all image files listed (40+ files, each with real sizes like 175KB, 291KB etc.)

### Step 7: Upload to Hostinger
1. Open Hostinger File Manager
2. Navigate to `public_html`
3. Enable "Show Hidden Files" (important for .htaccess)
4. Select ALL contents inside your local `dist` folder
5. Upload everything to `public_html`
6. Make sure `.htaccess` is uploaded (it's a hidden file)

## Checklist before uploading
- [ ] dist/index.html is present
- [ ] dist/assets/generated/ contains 40+ image files (each 150KB-2MB in size, NOT 0 bytes)
- [ ] dist/favicon.ico is present
- [ ] dist/.htaccess is present
- [ ] dist/sitemap.xml is present

## How to check if an image is real (not corrupt)
Right-click any .jpg or .png file in `dist/assets/generated/` and open with Paint or Photos.
If it shows an actual image, it is real. If it shows an error, it is a stub file.

If images still appear corrupt after following these steps, it means the
`public/assets/generated/` folder in the downloaded ZIP may be missing the actual
binary image files. In that case, contact support.
