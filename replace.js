const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

// Process src folder
walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: Africa Sickle Cell Organisation -> Sickle Cell 254 Initiative
    let newContent = content.replace(/Africa Sickle Cell Organisation/g, 'Sickle Cell 254 Initiative');
    
    // Pattern 2: ASCO -> Sickle Cell 254
    newContent = newContent.replace(/\bASCO's\b/g, "Sickle Cell 254's");
    newContent = newContent.replace(/\bASCO\b/g, 'Sickle Cell 254');
    
    // Pattern 3: Email africasicklecellorg@gmail.com to something else? We'll leave email as is since we don't know the new one.
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
