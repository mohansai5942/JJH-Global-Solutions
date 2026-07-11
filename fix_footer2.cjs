const fs = require('fs');
const filePath = 'src/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Match the logo exactly as in header
content = content.replace(/className="h-16 sm:h-20 w-auto object-contain object-left"/g, 'className="h-14 sm:h-16 w-auto object-contain"');
content = content.replace(/className="w-full h-auto max-w-sm object-contain object-left brightness-0 invert"/g, 'className="h-14 sm:h-16 w-auto object-contain"'); // fallback just in case

// Double check the max-w
content = content.replace(/gap-12 max-w-7xl mx-auto/g, 'gap-12');
content = content.replace(/gap-6 max-w-7xl mx-auto/g, 'gap-6');

// if footer background needs to be light for the logo to be visible, let's keep it dark but put the logo in a white container if we suspect it's dark text, but the user said "header lo laga" (like in the header). Let's just make the image classes exact.

fs.writeFileSync(filePath, content, 'utf8');
