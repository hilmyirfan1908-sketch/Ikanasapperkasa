import { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Kualitas() {
  const [openFaq, setOpenFaq] = useState(null);
  const trackRef = useRef(null);
  const scroll = (dir) => { if (trackRef.current) { const amount = trackRef.current.clientWidth; trackRef.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" }); } };
  
  // Custom toggle function for FAQ that replaces the static HTML
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

      <section className="faq-section"