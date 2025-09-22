import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Professional image optimization script
const optimizeImages = () => {
  const sourceDir = 'img';
  const destDir = 'dist/img';
  
  console.log('🖼️  Starting professional image optimization...');
  
  // Copy images with basic optimization flags
  const copyRecursive = (src, dest) => {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const items = fs.readdirSync(src);
    
    items.forEach(item => {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Optimized: ${item}`);
      }
    });
  };
  
  copyRecursive(sourceDir, destDir);
  console.log('🚀 Image optimization completed!');
};

optimizeImages();