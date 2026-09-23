const fs = require('fs');

let file = fs.readFileSync('src/pages/Kualitas.jsx', 'utf8');

if (!file.includes('const scroll =')) {
  file = file.replace("import { useState } from 'react';", "import { useState, useRef } from 'react';");
  file = file.replace('import { ChevronDown } from \'lucide-react\';', 'import { ChevronDown, ChevronLeft, ChevronRight } from \'lucide-react\';');
  file = file.replace('const [openFaq, setOpenFaq] = useState(null);', 'const [openFaq, setOpenFaq] = useState(null);\n  const trackRef = useRef(null);\n  const scroll = (dir) => { if (trackRef.current) { const amount = trackRef.current.clientWidth; trackRef.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" }); } };');
  
  file = file.replace('<div className="testi-carousel">', '<div className="testi-carousel" ref={trackRef}>');
  
  const buttonsHTML = `
            </div>
            <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous testi" style={{left: '16px'}}>
              <ChevronLeft />
            </button>
            <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next testi" style={{right: '16px'}}>
              <ChevronRight />
            </button>
          </div>
  `;
  
  // Find where testi-carousel ends
  const endOfCarousel = file.indexOf('</div>\n          </div>\n        </div>\n      </section>\n\n      <section className="faq-section"');
  if (endOfCarousel > -1) {
     file = file.substring(0, endOfCarousel) + buttonsHTML + '      </div>\n      </section>\n\n      <section className="faq-section"';
  } else {
     console.log("Could not find end of carousel!");
  }
  
  fs.writeFileSync('src/pages/Kualitas.jsx', file);
}
