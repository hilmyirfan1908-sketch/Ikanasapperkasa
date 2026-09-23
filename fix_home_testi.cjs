const fs = require('fs');

let file = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// 1. Imports and state
if (!file.includes('const trackRef = useRef(null);')) {
  file = file.replace("import { useState, useEffect } from 'react';", "import { useState, useEffect, useRef } from 'react';");
  file = file.replace('const [openFaq, setOpenFaq] = useState(null);', 'const [openFaq, setOpenFaq] = useState(null);\n  const trackRef = useRef(null);\n  const scroll = (dir) => { if (trackRef.current) { const amount = trackRef.current.clientWidth; trackRef.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" }); } };');
}

// 2. Add relative wrapper to section-header and testi-carousel-wrapper
// Currently:
//       <section className="container" style={{paddingTop: '48px', paddingBottom: '48px'}}>
//         <div className="section-header" style={{justifyContent: 'center', textAlign: 'center'}}>
//           <h2 className="section-title">Apa Kata Mereka?</h2>
//         </div>
//         <div className="testi-carousel-wrapper">
//           <div className="testi-carousel">

// Change to:
//       <section className="container" style={{paddingTop: '48px', paddingBottom: '48px', position: 'relative'}}>
//         <div className="section-header" style={{justifyContent: 'center', textAlign: 'center'}}>
//           ...
//         <div className="testi-carousel-wrapper" ref={trackRef}>

file = file.replace('<section className="container" style={{paddingTop: \'48px\', paddingBottom: \'48px\'}}>', '<section className="container" style={{paddingTop: \'48px\', paddingBottom: \'48px\', position: \'relative\'}}>');
file = file.replace('<div className="testi-carousel-wrapper">', '<div className="testi-carousel-wrapper" ref={trackRef}>');

// 3. Add buttons after testi-carousel-wrapper ends
// Currently ends with:
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

const buttonsHTML = `
          </div>
        </div>
        <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous testi" style={{left: '16px', top: '60%'}}>
          <ChevronLeft />
        </button>
        <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next testi" style={{right: '16px', top: '60%'}}>
          <ChevronRight />
        </button>
      </section>
`;

file = file.replace(/<\/div>\n\s*<\/div>\n\s*<\/section>\n\n\s*<section className="faq-section"/, buttonsHTML + '\n      <section className="faq-section"');

fs.writeFileSync('src/pages/Home.jsx', file);
