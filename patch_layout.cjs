const fs = require('fs');

// Fix Layout.jsx (Footer)
let layout = fs.readFileSync('src/components/Layout.jsx', 'utf8');
const footerStart = layout.indexOf('<footer className="footer">');
const fixedFooter = `<footer className="footer">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="footer-brand"><img src="/assets/images/logo.png" alt="Ikan Asap Perkasa Logo" className="logo-img" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '12px'}} /> Ikan Asap Perkasa</div>
            <p className="footer-address">
              <strong>Pusat Pengasapan Tradisional</strong><br/>
              Jl. Pesisir Utara No. 45, Demak, Jawa Tengah, Indonesia<br/>
              Buka Setiap Hari: 08.00 - 17.00 WIB
            </p>
          </div>
          <div className="footer-right">
            <h3 className="footer-tagline">Punya pertanyaan atau ingin pesan dalam jumlah besar?</h3>
            <a href="https://wa.me/628111908119" className="btn btn-primary footer-btn" target="_blank" rel="noopener noreferrer">
              Hubungi Kami (WhatsApp)
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Ikan Asap Perkasa. Hak Cipta Dilindungi.
        </div>
      </footer>
    </>
  );
}
`;
layout = layout.substring(0, footerStart) + fixedFooter;
fs.writeFileSync('src/components/Layout.jsx', layout);

// Fix Home.jsx (CTA)
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace(/<div className="hero-fixed-cta">[\s\S]*?<\/div>\n      <\/section>/, `</section>\n      <Link to="/products" className="btn btn-primary hero-fixed-cta">\n        Lihat Produk\n      </Link>`);
fs.writeFileSync('src/pages/Home.jsx', home);
