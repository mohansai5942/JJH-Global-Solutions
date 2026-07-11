const fs = require('fs');
const filePath = 'src/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix max-w
content = content.replace(/gap-12 max-w-7xl mx-auto/g, 'gap-12');
content = content.replace(/gap-6 max-w-7xl mx-auto/g, 'gap-6');

// Fix logo
content = content.replace(/className="w-full h-auto max-w-sm object-contain object-left brightness-0 invert"/g, 'className="h-16 sm:h-20 w-auto object-contain object-left"');

fs.writeFileSync(filePath, content, 'utf8');
