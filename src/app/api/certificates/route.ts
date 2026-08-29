import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface CertificateDoc {
  filename: string;
  title: string;
  url: string;
  ext: string;
  isPdf: boolean;
  sizeBytes: number;
  updatedAt: string;
}

export async function GET() {
  try {
    const rootCertDir = path.join(process.cwd(), 'certificates');
    const publicCertDir = path.join(process.cwd(), 'public', 'certificates');

    // Ensure public/certificates exists
    if (!fs.existsSync(publicCertDir)) {
      fs.mkdirSync(publicCertDir, { recursive: true });
    }

    // Auto-sync any files from root certificates folder to public/certificates
    if (fs.existsSync(rootCertDir)) {
      const rootFiles = fs.readdirSync(rootCertDir);
      for (const file of rootFiles) {
        const srcPath = path.join(rootCertDir, file);
        const destPath = path.join(publicCertDir, file);
        if (fs.statSync(srcPath).isFile()) {
          try {
            fs.copyFileSync(srcPath, destPath);
          } catch (e) {
            // ignore copy lock
          }
        }
      }
    }

    const files = fs.readdirSync(publicCertDir).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ['.pdf', '.png', '.jpg', '.jpeg', '.webp'].includes(ext);
    });

    const documents: CertificateDoc[] = files.map((filename) => {
      const filePath = path.join(publicCertDir, filename);
      const stat = fs.statSync(filePath);
      const ext = path.extname(filename).toLowerCase();
      
      // Auto-format title from any filename: "my_udemy-certificate_2026.pdf" -> "My Udemy Certificate 2026"
      const nameWithoutExt = path.basename(filename, ext);
      const formattedTitle = nameWithoutExt
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .trim();

      return {
        filename,
        title: formattedTitle || filename,
        url: `/certificates/${encodeURIComponent(filename)}`,
        ext: ext.replace('.', '').toUpperCase(),
        isPdf: ext === '.pdf',
        sizeBytes: stat.size,
        updatedAt: stat.mtime.toISOString(),
      };
    });

    return NextResponse.json({ success: true, count: documents.length, documents });
  } catch (error) {
    return NextResponse.json({ success: false, documents: [] }, { status: 200 });
  }
}
