const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

// 1. Rename across files
walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    let newContent = content.replace(/Sickle Cell 254 Initiative/g, 'Center of Sickle Cell Warriors');
    newContent = newContent.replace(/Sickle Cell 254/g, 'Center of Sickle Cell Warriors');
    
    // The previous plan asked me to update Email and Location. Let's do that cleanly.
    newContent = newContent.replace(/africasicklecellorg@gmail\.com/g, 'info@centerforsicklecell.org');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
  }
});

// Rename in layout and contact specifically for WhatsApp/Phone
let footerPath = 'src/components/layout/Footer.tsx';
if (fs.existsSync(footerPath)) {
  let footer = fs.readFileSync(footerPath, 'utf8');
  // insert phone number
  if (!footer.includes('0722873489')) {
    footer = footer.replace(/<a href="mailto:info@centerforsicklecell\.org"/, `<a href="https://wa.me/254722873489" target="_blank" rel="noopener noreferrer" className="text-gray-mid hover:text-white transition-colors" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="mailto:info@centerforsicklecell.org"`);
    fs.writeFileSync(footerPath, footer, 'utf8');
  }
}

// 2. Setup image directories
const publicDir = path.join(__dirname, 'public');
const destImgDir = path.join(publicDir, 'img');
const destLogoDir = path.join(publicDir, 'logo');

if (!fs.existsSync(destImgDir)) fs.mkdirSync(destImgDir, {recursive: true});
if (!fs.existsSync(destLogoDir)) fs.mkdirSync(destLogoDir, {recursive: true});

const srcImgDir = path.join(__dirname, '..', 'Img');
const srcLogoDir = path.join(__dirname, '..', 'Logo');

if (fs.existsSync(srcImgDir)) {
  fs.readdirSync(srcImgDir).forEach(f => {
    fs.copyFileSync(path.join(srcImgDir, f), path.join(destImgDir, f));
  });
}
if (fs.existsSync(srcLogoDir)) {
  fs.readdirSync(srcLogoDir).forEach(f => {
    fs.copyFileSync(path.join(srcLogoDir, f), path.join(destLogoDir, f));
  });
}

console.log('Update Complete.');
