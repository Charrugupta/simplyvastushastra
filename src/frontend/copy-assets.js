/**
 * Cross-platform script to copy all images from public/assets to dist/assets.
 * Run after `vite build` to guarantee all images are present in dist/.
 * Works on Windows, Mac, and Linux.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source folder not found, skipping: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  let count = 0;
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }
  if (count > 0) console.log(`Copied ${count} files from ${src} -> ${dest}`);
}

// Copy generated images
copyDir(
  path.join(__dirname, 'public/assets/generated'),
  path.join(__dirname, 'dist/assets/generated')
);

// Copy blog images
copyDir(
  path.join(__dirname, 'public/assets/blog-images'),
  path.join(__dirname, 'dist/assets/blog-images')
);

// Copy favicon
const faviconSrc = path.join(__dirname, 'public/favicon.ico');
const faviconDest = path.join(__dirname, 'dist/favicon.ico');
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, faviconDest);
  console.log('Copied favicon.ico');
}

// Copy .htaccess
const htaccessSrc = path.join(__dirname, 'public/.htaccess');
const htaccessDest = path.join(__dirname, 'dist/.htaccess');
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log('Copied .htaccess');
}

console.log('\nAll assets copied successfully. dist/ is ready for Hostinger upload.');
