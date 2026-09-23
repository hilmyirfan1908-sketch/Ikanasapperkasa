const fs = require('fs');

let file = fs.readFileSync('src/pages/Kualitas.jsx', 'utf8');

// The current HTML around arrows is:
//             <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous testi" style={{left: '16px'}}>
//               <ChevronLeft />
//             </button>
//             <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next testi" style={{right: '16px'}}>
//               <ChevronRight />
//             </button>
//           </div>
//         </div>
//       </section>

// I want to ensure it looks like this:
//           </div>
//           <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous testi" style={{left: '16px', top: '60%'}}>
//             <ChevronLeft />
//           </button>
//           <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next testi" style={{right: '16px', top: '60%'}}>
//             <ChevronRight />
//           </button>
//         </div>
//       </section>

file = file.replace(/<div style=\{\{ maxWidth: '1440px', margin: '0 auto', overflow: 'hidden' \}\}>/, "<div style={{ maxWidth: '1440px', margin: '0 auto', overflow: 'hidden', position: 'relative' }}>");

// Change top of arrows to 60% so they are aligned with the cards, not the header.
file = file.replace(/style=\{\{left: '16px'\}\}/, "style={{left: '16px', top: '60%'}}");
file = file.replace(/style=\{\{right: '16px'\}\}/, "style={{right: '16px', top: '60%'}}");

fs.writeFileSync('src/pages/Kualitas.jsx', file);
