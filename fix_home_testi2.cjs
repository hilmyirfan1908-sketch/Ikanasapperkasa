const fs = require('fs');

let file = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const target = `            ))}
          </div>
        </div>
      </section>
    
      <section className="faq-section">`;

const replacement = `            ))}
          </div>
        </div>
        <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous testi" style={{left: '16px', top: '60%'}}>
          <ChevronLeft />
        </button>
        <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next testi" style={{right: '16px', top: '60%'}}>
          <ChevronRight />
        </button>
      </section>
    
      <section className="faq-section">`;

file = file.replace(target, replacement);
fs.writeFileSync('src/pages/Home.jsx', file);
