const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/shadow-2xl/g, 'premium-shadow');
    content = content.replace(/shadow-xl/g, 'premium-shadow');
    content = content.replace(/shadow-lg/g, 'premium-shadow');
    content = content.replace(/shadow-md/g, 'shadow-sm');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
