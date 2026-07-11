const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const colorReplacements = {
  '#2865EB': '#0F172A', // Slate 900
  'bg-blue-50': 'bg-slate-50',
  'bg-blue-100': 'bg-slate-100',
  'bg-blue-500': 'bg-slate-600',
  'bg-blue-600': 'bg-slate-800',
  'bg-blue-700': 'bg-slate-900',
  'text-blue-50': 'text-slate-50',
  'text-blue-100': 'text-slate-100',
  'text-blue-300': 'text-slate-300',
  'text-blue-400': 'text-slate-400',
  'text-blue-500': 'text-slate-500',
  'text-blue-600': 'text-slate-800',
  'text-blue-700': 'text-slate-900',
  'border-blue-100': 'border-slate-200',
  'border-blue-200': 'border-slate-300',
  'border-blue-500': 'border-slate-600',
  'border-blue-600': 'border-slate-800',
  'shadow-blue-500': 'shadow-slate-500',
  'shadow-blue-600': 'shadow-slate-600',
  'shadow-blue-900': 'shadow-slate-900',
  'from-[#2865EB] to-blue-400': 'from-slate-800 to-slate-500',
  'from-[#2865EB] to-blue-500': 'from-slate-900 to-slate-700',
};

const borderReplacements = {
  'rounded-[3rem]': 'rounded-none',
  'rounded-[2.5rem]': 'rounded-none',
  'rounded-[2rem]': 'rounded-none',
  'rounded-3xl': 'rounded-sm',
  'rounded-2xl': 'rounded-sm',
  'rounded-xl': 'rounded-sm',
  'rounded-lg': 'rounded-sm',
  'shadow-2xl': 'shadow-xl',
  'shadow-xl': 'shadow-lg',
};

const layoutReplacements = {
  'font-black': 'font-semibold',
  'font-extrabold': 'font-semibold',
};

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply replacements
    for (const [key, value] of Object.entries(colorReplacements)) {
      content = content.split(key).join(value);
    }
    
    for (const [key, value] of Object.entries(borderReplacements)) {
      content = content.split(key).join(value);
    }
    
    for (const [key, value] of Object.entries(layoutReplacements)) {
      content = content.split(key).join(value);
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
