import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ShieldCheck, Flame, Utensils, ThumbsUp, Medal, Sparkles, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: '/assets/images/hero_1.jpg',
      title: 'Ikan Asap Premium Dari Pantai Utara',
      desc: 'Nikmati kelezatan ikan asap tradisional dengan kualitas ekspor. Diproses dengan kayu bakar pilihan.'
    },
    {
      img: '/assets/images/hero_2.jpg',
      title: 'Juara Pantura: Ikan Manyung Asap',
      desc: 'Daging tebal, empuk, dan aroma asap yang otentik. Tersedia dalam potongan siap masak.'
    },
    {
      img: '/assets/images/hero_3.jpg',
      title: '100% Halal & Tanpa Pengawet',
      desc: 'Dikemas vakum untuk menjaga kesegaran hingga tiba di meja makan keluarga Anda.'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, idx) => (
            <div className="hero-slide" key={idx}>
              <img src={slide.img} alt={`Hero ${idx + 1}`} />
              <div className="hero-overlay">
                <div className="hero-content-inner">
                  <h1 className="hero-title text-white">{slide.title}</h1>
                  <p className="hero-desc">{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="hero-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft />
        </button>
        <button className="hero-nav next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight />
        </button>

        </section>
      <Link to="/products" className="btn btn-primary hero-fixed-cta">
        Lihat Produk
      </Link>

      
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
          <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={i}>
            <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
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
