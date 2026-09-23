const fs = require('fs');
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const uspStart = home.indexOf('<section className="usp-wrapper">');
const fixedContent = `
      <section className="container" style={{paddingTop: '48px'}}>
        <div className="section-header" style={{flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '48px'}}>
          <h2 className="section-title">Kenapa Memilih Kami?</h2>
          <p className="text-muted" style={{marginTop: '8px'}}>Kualitas premium dari Pantai Utara untuk meja makan Anda</p>
        </div>
        
        <div className="usp-list">
          <div className="usp-box">
            <div className="usp-text-side">
              <h3 className="usp-box-title">100% Halal</h3>
              <p className="usp-box-desc">Seluruh proses pengolahan, mulai dari pemilihan bahan baku ikan segar, pembersihan, hingga proses pengasapan tradisional dilakukan sesuai dengan standar higienis dan syariat.</p>
            </div>
            <div className="usp-image-side">
              <img src="/assets/images/usp_1.jpg" alt="100% Halal dan Higienis" style={{objectPosition: '15% center'}} />
            </div>
          </div>
          
          <div className="usp-box">
            <div className="usp-text-side">
              <h3 className="usp-box-title">Cocok Untuk Semua</h3>
              <p className="usp-box-desc">Kelezatan ikan asap kami disukai oleh semua usia sebagai sumber protein terbaik untuk keluarga.</p>
            </div>
            <div className="usp-image-side">
              <img src="/assets/images/usp_2.jpg" alt="Cocok Untuk Semua" />
            </div>
          </div>
          
          <div className="usp-box">
            <div className="usp-text-side">
              <h3 className="usp-box-title">Olahan Alami, Tanpa Pengawet</h3>
              <p className="usp-box-desc">Ikan Asap Perkasa diolah secara alami, menggunakan kayu bakar dan tanpa tambahan pengawet.</p>
            </div>
            <div className="usp-image-side">
              <img src="/assets/images/usp_3.jpg" alt="Olahan Alami, Tanpa Pengawet" />
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{paddingTop: '48px', paddingBottom: '48px'}}>
        <div className="section-header" style={{justifyContent: 'center', textAlign: 'center'}}>
          <h2 className="section-title">Apa Kata Mereka?</h2>
        </div>
        <div className="testi-carousel-wrapper">
          <div className="testi-carousel">
            {[
              {name: 'Siti Rahmawati', loc: 'Surabaya, Jawa Timur', quote: 'Ikan asapnya bener-bener enak! Wangi asapnya kerasa banget, dagingnya tebal.'},
              {name: 'Budi Santoso', loc: 'Jakarta Selatan', quote: 'Langganan beli di sini buat mertua. Ikan manyungnya juara, nggak amis sama sekali.'},
              {name: 'Nisa Yulianti', loc: 'Bandung, Jawa Barat', quote: 'Kemasan vakumnya bikin tahan lama. Pas nyampe Bandung masih seger banget!'},
              {name: 'Ahmad Rifai', loc: 'Semarang, Jawa Tengah', quote: 'Rasa otentik pantura banget! Harganya juga terjangkau untuk kualitas premium begini.'},
              {name: 'Dewi Lestari', loc: 'Yogyakarta', quote: 'Anak-anak suka sekali sama Ikan Bandeng tanpa durinya. Sangat praktis buat sarapan keluarga.'},
              {name: 'Hendra Gunawan', loc: 'Tangerang', quote: 'Sambal terasinya gila enak banget. Pas dipadu sama tongkol asap, nasi sebakul bisa habis!'},
              {name: 'Rina Marlina', loc: 'Malang, Jawa Timur', quote: 'Coba beli paket testernya dulu, eh ternyata semuanya enak. Besok order kepala manyung yang gede ah.'}
            ].map((testi, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-header">
                  <div>
                    <div className="testi-name">{testi.name}</div>
                    <div className="testi-loc">{testi.loc}</div>
                  </div>
                </div>
                <div className="testi-quote">"{testi.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
`;

home = home.substring(0, uspStart) + fixedContent;
fs.writeFileSync('src/pages/Home.jsx', home);
