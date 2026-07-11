const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = {
  'bg-[#F8FAFC]': 'bg-slate-50',
  'bg-[#FFFFFF]': 'bg-white',
  'bg-[#2865EB]': 'bg-slate-900',
  'text-[#2865EB]': 'text-slate-900',
  'border-[#2865EB]': 'border-slate-900',
};

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    for (const [key, value] of Object.entries(replacements)) {
      content = content.split(key).join(value);
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
