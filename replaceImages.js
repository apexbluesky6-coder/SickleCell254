const fs = require('fs');

const imgList = [
  '/img/photo_2026-04-05_17-05-15.jpg',
  '/img/photo_2026-04-05_17-05-33.jpg',
  '/img/photo_2026-04-05_17-06-19.jpg',
  '/img/photo_2026-04-05_17-06-27.jpg',
  '/img/photo_2026-04-05_17-06-30.jpg',
  '/img/photo_2026-04-05_17-06-31.jpg',
  '/img/photo_2026-04-05_17-06-32.jpg'
];

let counter = 0;
function getNextImage() {
  return imgList[counter++ % imgList.length];
}

function processComponent(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace Unsplash URLs
  content = content.replace(/https:\/\/images\.unsplash\.com\/[^"']+/g, () => getNextImage());

  // Replace SVG logo in Navbar & Footer
  if (filePath.includes('Navbar.tsx') || filePath.includes('Footer.tsx')) {
    content = content.replace(/<svg[^>]*>[\s\S]*?<\/svg>/, '<Image src="/logo/photo_2026-04-05_17-06-34.jpg" width={40} height={40} alt="Logo" className="rounded-full object-cover" />');
    
    // add import Image from next/image to Navbar/Footer if missing
    if (!content.includes('import Image from "next/image"')) {
      content = 'import Image from "next/image";\n' + content;
    }
  }

  // Handle src/app/contact/page.tsx specific phone updates (already has WhatsApp somewhat updated in footer via previous script)
  // Let's update Contact Page explicitly
  if (filePath.includes('contact/page.tsx') || filePath.includes('contact\\page.tsx')) {
    // Modify the location text to be specific about partnerships
    if (!content.includes('Metropolitan Hospital')) {
       content = content.replace('Nairobi, Kenya<br/>\n                       (Operating across 6 high-burden counties)', 'Nairobi, Kenya<br/>\n                       (Partnering with Metropolitan Hospital and JOOTRH)');
    }
    // Modify the phone number block
    if (!content.includes('0722 873489')) {
       let emailBlock = `                 <div className="flex gap-4 mb-8">
                   <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-light">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground text-lg mb-1">Email address</h4>
                     <a href="mailto:info@centerforsicklecell.org" className="text-gray-dark hover:text-primary transition-colors">
                       info@centerforsicklecell.org
                     </a>
                   </div>
                 </div>`;
                 
       let phoneBlock = `
                 <div className="flex gap-4 mb-8">
                   <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-light">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground text-lg mb-1">Phone & WhatsApp</h4>
                     <a href="https://wa.me/254722873489" className="text-gray-dark hover:text-primary transition-colors">
                       0722 873489
                     </a>
                   </div>
                 </div>`;
                 
       content = content.replace(emailBlock, emailBlock + phoneBlock);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated images/logos in', filePath);
  }
}

const targets = [
  'src/components/sections/WhatIsSickleCell.tsx',
  'src/components/sections/Hero.tsx',
  'src/lib/cms.ts',
  'src/app/about/page.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/app/contact/page.tsx'
];

targets.forEach(processComponent);
