const fs = require('fs');

// --- Patch Home.jsx ---
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// 1. Add ChevronDown to imports and useState if missing
if (!home.includes('ChevronDown')) {
  home = home.replace('ChevronRight }', 'ChevronRight, ChevronDown }');
}
if (!home.includes('const [openFaq')) {
  home = home.replace('const [currentSlide', 'const [openFaq, setOpenFaq] = useState(null);\n  const [currentSlide');
}

// 2. Add FAQ section before the end
const faqSection = `
      <section className="faq-section">
        <div style={{textAlign: 'left', marginBottom: '32px'}}>
          <h2 className="section-title">Pertanyaan Umum</h2>
        </div>
        
        {[
          { q: 'Bagaimana cara memesan produk Ikan Asap Perkasa?', a: 'Sangat mudah! Anda hanya perlu menekan tombol "Pesan Sekarang" yang ada di setiap halaman produk. Anda akan otomatis diarahkan ke WhatsApp admin kami untuk proses pencatatan pesanan, penghitungan ongkir, dan pembayaran.' },
          { q: 'Berapa lama ikan asap bisa bertahan?', a: 'Dengan kemasan vakum dari kami, ikan asap bisa bertahan hingga 7 hari di suhu ruang saat pengiriman. Jika disimpan di freezer, bisa awet hingga 1 bulan lebih.' },
          { q: 'Apakah produk Ikan Asap Perkasa sudah halal?', a: 'Tentu saja! Semua proses produksi, dari pembersihan, pengasapan, hingga pengemasan dilakukan secara higienis dan terjamin 100% Halal.' },
          { q: 'Apakah melayani pengiriman ke luar pulau Jawa?', a: 'Ya, kami menggunakan ekspedisi yang mendukung pengiriman ke seluruh Indonesia dengan kemasan vakum aman.' },
          { q: 'Apakah ada harga khusus untuk grosir atau reseller?', a: 'Kami sangat menyambut kemitraan! Jika Anda ingin menjadi reseller, dropshipper, atau membeli dalam partai besar, silakan hubungi kami via WhatsApp untuk mendapatkan potongan harga spesial.' },
          { q: 'Ikan jenis apa yang paling tidak amis?', a: 'Metode pengasapan kami secara alami menghilangkan sebagian besar bau amis. Namun, jika Anda sangat sensitif, kami merekomendasikan Ikan Pari (Pe) Asap atau Ikan Manyung, karena karakteristik dagingnya yang lebih menyerupai daging ayam setelah diasap.' }
        ].map((faq, i) => (
          <div className={\`faq-item \${openFaq === i ? 'active' : ''}\`} key={i}>
            <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {faq.q} <ChevronDown className="faq-icon" size={20} />
            </button>
            <div className="faq-answer" style={{ maxHeight: openFaq === i ? '200px' : '0' }}>
              <div className="faq-answer-inner">{faq.a}</div>
            </div>
          </div>
        ))}
      </section>
`;

if (!home.includes('Pertanyaan Umum')) {
  home = home.replace('</>\n  );\n}', faqSection + '    </>\n  );\n}');
  fs.writeFileSync('src/pages/Home.jsx', home);
}

// --- Patch Layout.jsx ---
let layout = fs.readFileSync('src/components/Layout.jsx', 'utf8');

const oldFooterRight = `<div className="footer-right">
            <h3 className="footer-tagline">Punya pertanyaan atau ingin pesan dalam jumlah besar?</h3>
            <a href="https://wa.me/628111908119" className="btn btn-primary footer-btn" target="_blank" rel="noopener noreferrer">
              Hubungi Kami (WhatsApp)
            </a>
          </div>`;

const newFooterRight = `<div className="footer-right" style={{ padding: '40px 32px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <h3 className="footer-tagline" style={{ textAlign: 'left', marginBottom: '32px', fontSize: '20px' }}>Punya pertanyaan atau ingin pesan dalam jumlah besar?</h3>
            <div style={{ textAlign: 'center', marginTop: 'auto' }}>
              <a href="https://wa.me/628111908119" className="btn btn-primary footer-btn" target="_blank" rel="noopener noreferrer" style={{ width: 'auto', padding: '16px 40px', display: 'inline-block' }}>
                Hubungi Kami (WhatsApp)
              </a>
            </div>
          </div>`;

layout = layout.replace(oldFooterRight, newFooterRight);
fs.writeFileSync('src/components/Layout.jsx', layout);
