const fs = require('fs');

const pageCode = `import { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Kualitas() {
  const [openFaq, setOpenFaq] = useState(null);
  const trackRef = useRef(null);
  
  const scroll = (dir) => { 
    if (trackRef.current) { 
      const amount = trackRef.current.clientWidth; 
      trackRef.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" }); 
    } 
  };

  const toggleFaq = (i) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <>
      <section className="hero-wrapper" style={{ height: '50vh', minHeight: '400px' }}>
        <div className="hero-slide">
          <img src="/assets/images/kualitas_hero.jpg" alt="Kualitas" className="hero-bg" />
          <div className="hero-overlay">
            <div className="hero-content-inner" style={{ textAlign: 'left' }}>
              <h1 className="hero-title text-white">Kualitas</h1>
              <p className="hero-desc">Komitmen kami menyajikan olahan laut terbaik yang aman, lezat, dan menyehatkan untuk keluarga Anda.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="deep-usp-section bg-red" style={{ paddingTop: '48px' }}>
        <div className="section-header" style={{ maxWidth: '960px', margin: '0 auto', alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left', marginBottom: '32px', display: 'flex', flexDirection: 'column' }}>
          <h2 className="section-title">Rasa Istimewa, Kualitas Terjaga</h2>
          <p className="text-white" style={{ marginTop: '8px', maxWidth: '960px', textAlign: 'left', opacity: 0.8 }}>Kami pastikan setiap proses terjaga dan higienis, supaya kamu bisa menikmati produk yang lezat di setiap gigitan.</p>
        </div>

        <div className="usp-list" style={{ maxWidth: '960px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
          <div className="usp-box">
            <div className="usp-text-side">
              <h3 className="usp-box-title">100% Halal</h3>
              <p className="usp-box-desc">Seluruh proses pengolahan, mulai dari pemilihan bahan baku ikan segar, pembersihan, hingga proses pengasapan tradisional dilakukan sesuai dengan standar higienis dan syariat.</p>
            </div>
            <div className="usp-image-side">
              <img src="/assets/images/usp_1.jpg" alt="100% Halal dan Higienis" style={{ objectPosition: '15% center' }} />
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

      <section className="bg-red-dark" style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', overflow: 'hidden', position: 'relative' }}>
          <div className="section-header container" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Ribuan Pelanggan Telah Membuktikan</h2>
          </div>
          
          <div className="testi-carousel-wrapper" ref={trackRef}>
            <div className="testi-carousel">
              {[
                {name: 'Siti Rahmawati', loc: 'Surabaya, Jawa Timur', quote: 'Ikan asapnya bener-bener enak! Wangi asapnya kerasa banget, dagingnya tebal. Packing juga aman sampai Surabaya.'},
                {name: 'Budi Santoso', loc: 'Jakarta Selatan', quote: 'Langganan beli di sini buat mertua. Ikan manyungnya juara, nggak amis sama sekali. Pelayanannya ramah.'},
                {name: 'Nisa Yulianti', loc: 'Bandung, Jawa Barat', quote: 'Kemasan vakumnya bikin tahan lama. Pas nyampe Bandung masih seger, langsung dimasak rica-rica.'},
                {name: 'Ahmad Rifai', loc: 'Semarang, Jawa Tengah', quote: 'Rasa otentik pantura banget! Harganya juga terjangkau untuk kualitas premium begini.'},
                {name: 'Dewi Lestari', loc: 'Yogyakarta', quote: 'Anak-anak suka sekali sama Ikan Bandeng tanpa durinya. Sangat praktis buat sarapan keluarga.'},
                {name: 'Hendra Gunawan', loc: 'Tangerang', quote: 'Sambal terasinya gila enak banget. Pas dipadu sama tongkol asap, nasi sebakul bisa habis!'}
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
          
          <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous testi" style={{left: '16px', top: '60%'}}>
            <ChevronLeft />
          </button>
          <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next testi" style={{right: '16px', top: '60%'}}>
            <ChevronRight />
          </button>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Pertanyaan yang Sering Diajukan (FAQ)</h2>
        
        {[
          { q: 'Bagaimana cara memesan produk Ikan Asap Perkasa?', a: 'Sangat mudah! Anda hanya perlu menekan tombol "Pesan Sekarang" yang ada di setiap halaman produk. Anda akan otomatis diarahkan ke WhatsApp admin kami untuk proses pencatatan pesanan, penghitungan ongkir, dan pembayaran.' },
          { q: 'Berapa lama ikan asap bisa bertahan?', a: 'Dengan teknologi kemasan vakum kami, ikan asap bisa bertahan hingga 7 hari di suhu ruang (sangat aman untuk durasi pengiriman antar pulau). Jika sudah tiba, silakan simpan di dalam kulkas (bertahan 2 minggu) atau freezer (awet hingga 1 bulan lebih tanpa merubah rasa).' },
          { q: 'Apakah produk Ikan Asap Perkasa sudah halal?', a: 'Tentu saja. Kami menjamin 100% kehalalan produk kami, baik dari jenis bahan baku, metode penyembelihan (untuk bahan baku tertentu), kebersihan fasilitas, hingga proses pengemasan akhir.' },
          { q: 'Apakah melayani pengiriman ke luar pulau Jawa?', a: 'Ya, kami melayani pengiriman ke seluruh wilayah di Indonesia! Kami bekerja sama dengan jasa ekspedisi terpercaya dan menggunakan pengemasan vakum berlapis sehingga produk tetap segar setibanya di rumah Anda.' },
          { q: 'Apakah ada harga khusus untuk grosir atau reseller?', a: 'Kami sangat menyambut kemitraan! Jika Anda ingin menjadi reseller, dropshipper, atau membeli dalam partai besar untuk acara hajatan, silakan hubungi kami via WhatsApp untuk mendapatkan potongan harga spesial.' },
          { q: 'Ikan jenis apa yang paling tidak amis?', a: 'Metode pengasapan kami secara alami menghilangkan sebagian besar bau amis pada semua jenis ikan. Namun, jika Anda sangat sensitif terhadap bau ikan, kami sangat merekomendasikan Ikan Pari (Pe) Asap atau Ikan Manyung, karena karakteristik dagingnya yang lebih menyerupai daging ayam setelah diasap.' }
        ].map((faq, i) => (
          <div className={\`faq-item \${openFaq === i ? 'active' : ''}\`} key={i}>
            <button className="faq-question" onClick={() => toggleFaq(i)}>
              {faq.q} <ChevronDown className="faq-icon" size={20} />
            </button>
            <div className="faq-answer" style={{ maxHeight: openFaq === i ? '200px' : '0' }}>
              <div className="faq-answer-inner">{faq.a}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
`;
fs.writeFileSync('src/pages/Kualitas.jsx', pageCode);
