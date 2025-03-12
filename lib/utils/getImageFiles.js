'use client'
import fs from 'fs';
import path from 'path';

export const getImageFiles = (folderName) => {
  const galleryDir = path.join(process.cwd(), 'public','GalleryComponent', folderName);
  console.log(galleryDir)
  const files = fs.readdirSync(galleryDir);
  return files.filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file));
};
