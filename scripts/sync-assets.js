const fs = require('fs');
const path = require('path');

function syncFolder(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const srcFiles = new Set(fs.readdirSync(srcDir));

  // Copy new/updated files
  for (const file of Array.from(srcFiles)) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  // Remove deleted files
  const destFiles = fs.readdirSync(destDir);
  for (const file of destFiles) {
    if (!srcFiles.has(file)) {
      const toDelete = path.join(destDir, file);
      if (fs.statSync(toDelete).isFile()) {
        fs.unlinkSync(toDelete);
      }
    }
  }
}

// 1. Sync Certificates
const rootCert = path.join(__dirname, '..', 'certificates');
const publicCert = path.join(__dirname, '..', 'public', 'certificates');
syncFolder(rootCert, publicCert);

// 2. Sync Resume
const rootResume = path.join(__dirname, '..', 'resume');
const publicResume = path.join(__dirname, '..', 'public', 'resume');
syncFolder(rootResume, publicResume);

// Also create standardized aliases for resume
if (fs.existsSync(rootResume)) {
  const pdfs = fs.readdirSync(rootResume).filter(f => f.toLowerCase().endsWith('.pdf'));
  if (pdfs.length > 0) {
    const latestPdf = path.join(rootResume, pdfs[0]);
    fs.copyFileSync(latestPdf, path.join(publicResume, 'Jeslyn_Nivedhitha_S_Resume.pdf'));
    fs.copyFileSync(latestPdf, path.join(publicResume, 'resume.pdf'));
  }
}

// 3. Sync Blog Images
const rootBlogImages = path.join(__dirname, '..', 'blog_images');
const publicBlogImages = path.join(__dirname, '..', 'public', 'blog_images');
const publicImages = path.join(__dirname, '..', 'public', 'images');
syncFolder(rootBlogImages, publicBlogImages);
if (fs.existsSync(rootBlogImages)) {
  for (const file of fs.readdirSync(rootBlogImages)) {
    const srcPath = path.join(rootBlogImages, file);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, path.join(publicImages, file));
    }
  }
}

console.log('✓ Successfully synchronized resume, certificates, and blog images to public assets.');
