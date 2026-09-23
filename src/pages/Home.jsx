import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ShieldCheck, Flame, Utensils, ThumbsUp, Medal, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
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

        <div className="hero-fixed-cta">
          <Link to="/products" className="btn btn-primary" style={{width:'100%'}}>
            Lihat Semua Produk
          </Link>
        </div>
      </section>

      <section className="usp-wrapper">
        <div className="usp-box">
          <div className="usp-text-side">
            <h2 className="usp-title">Siap Santap, Tanpa Ribet</h2>
            <p className="usp-desc">Semua produk kami sudah matang sempurna melalui proses pengasapan tradisional. Cukup panaskan sebentar, langsung siap dinikmati bersama nasi hangat.</p>
          </div>
          <div className="usp-image-side">
            <img src="/assets/images/usp_1.jpg" alt="Ikan siap santap" />
          </div>
        </div>
        <div className="usp-box">
          <div className="usp-text-side">
            <h2 className="usp-title">Aroma Asap Asli</h2>
            <p className="usp-desc">Menggunakan kayu pilihan untuk menghasilkan aroma asap yang khas dan menggugah selera. Rasa gurih meresap hingga ke dalam serat daging.</p>
          </div>
          <div className="usp-image-side">
            <img src="/assets/images/usp_2.jpg" alt="Proses pengasapan" />
          </div>
        </div>
        <div className="usp-box">
          <div className="usp-text-side">
            <h2 className="usp-title">Tahan Lama & Higienis</h2>
            <p className="usp-desc">Dikemas vakum untuk menjaga kesegaran, kebersihan, dan cita rasa tanpa bahan pengawet buatan. Aman disimpan sebagai stok makanan andalan di rumah.</p>
          </div>
          <div className="usp-image-side">
            <img src="/assets/images/usp_3.jpg" alt="Kemasan higienis" />
          </div>
        </div>
      </section>

      <section className="container" style={{paddingTop:'64px'}}>
        <div className="section-header">
          <h2>Kualitas Terbaik</h2>
          <p className="text-gray" style={{marginTop:'8px'}}>Kenapa memilih Ikan Asap Perkasa?</p>
        </div>
        <div className="bento-grid">
          <div className="bento-item p-6">
            <div className="bento-icon"><Flame size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>100% Asap Alami</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Tanpa perasa buatan, murni dari kayu bakar pilihan.</p>
          </div>
          <div className="bento-item p-6">
            <div className="bento-icon"><ShieldCheck size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>Aman & Bersih</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Proses produksi standar tinggi dan kemasan vakum.</p>
          </div>
          <div className="bento-item p-6">
            <div className="bento-icon"><Utensils size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>Siap Saji</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Tinggal dipanaskan, hemat waktu masak Anda.</p>
          </div>
          <div className="bento-item p-6">
            <div className="bento-icon"><ThumbsUp size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>Rasa Terjamin</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Gurih, lezat, dan selalu bikin nambah porsi nasi.</p>
          </div>
        </div>
      </section>
    </>
  );
}