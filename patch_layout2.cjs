const fs = require('fs');

let layout = fs.readFileSync('src/components/Layout.jsx', 'utf8');

// Change className="logo" to className="brand"
layout = layout.replace(/className="logo"/g, 'className="brand"');

// Move mobile menu inside header
const headerEnd = layout.indexOf('</header>');
const mobileMenuStart = layout.indexOf('{/* Mobile Menu */}');
const mainStart = layout.indexOf('<main>');
const mobileMenuHTML = layout.substring(mobileMenuStart, mainStart);

layout = layout.substring(0, headerEnd) + '\n      ' + mobileMenuHTML.trim() + '\n      </header>\n\n      <main>' + layout.substring(mainStart + 6);
fs.writeFileSync('src/components/Layout.jsx', layout);
