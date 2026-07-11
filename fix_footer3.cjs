const fs = require('fs');
const filePath = 'src/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /<div className="flex items-center cursor-pointer select-none" onClick={\(\) => onNavigate\('home'\)}>/g,
  '<div className="flex items-center cursor-pointer select-none bg-white p-3 rounded-md inline-flex w-fit" onClick={() => onNavigate(\'home\')}>'
);

fs.writeFileSync(filePath, content, 'utf8');
