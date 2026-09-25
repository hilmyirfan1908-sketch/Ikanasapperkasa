import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ShieldCheck, Flame, Utensils, ThumbsUp, Medal, Sparkles, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import homeData from '../../data/home.json';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const trackRef = useRef(null);
  const scroll = (dir) => { if (trackRef.current) { const amount = trackRef.current.clientWidth; trackRef.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" }); } };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = homeData.hero.slides;
  
  const frozen = products.filter(p => p.category === 'frozen');
  const siapMakan = products.filter(p => p.category === 'siap-makan');

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
              <img src={slide.image} alt={`Hero ${idx + 1}`} />
              <div className="hero-overlay">
                <div className="hero-content-inner">
                  <h1 className="hero-title text-white">{slide.title}</h1>
                  <p className="hero-desc">{slide.body}</p>
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
      <a href="https://wa.me/+628111908119" target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-fixed-cta">
        Pesan Sekarang
      </a>

      <section className="container founder-section" style={{ paddingTop: '48px', paddingBottom: '24px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '32px' }}>{homeData.founder.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src={homeData.founder.image} 
            alt="Founder" 
            style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '32px' }} 
          />
          <div style={{ color: 'white', fontSize: '16px', lineHeight: '1.8', textAlign: 'center' }}>
            {homeData.founder.body.map((p, i) => (
              <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{paddingTop: '24px', paddingBottom: '24px'}}>
        <div className="section-header" style={{flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '48px'}}>
          <h2 className="section-title">{homeData.usp.title}</h2>
          <p className="text-muted" style={{marginTop: '8px'}}>{homeData.usp.subtitle}</p>
        </div>
        
        <div className="usp-list">
          {homeData.usp.items.map((item, idx) => (
            <div className="usp-box" key={idx}>
              <div className="usp-text-side">
                <h3 className="usp-box-title">{item.title}</h3>
                <p className="usp-box-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="products" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <div style={{ textAlign: 'left', marginBottom: '32px' }}>
          <h3 className="section-title" style={{ marginBottom: '16px', color: 'var(--gold)' }}>Ikan Asap Original</h3>
          <p style={{ color: 'white', marginBottom: '16px', textAlign: 'left', fontSize: '16px' }}>Pilihan ikan asap utuh kualitas premium yang dikemas vakum beku untuk menjaga kesegaran dan cita rasa tradisional khas Pantai Utara.</p>
        </div>
        <div className="product-grid">
          {frozen.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div style={{ textAlign: 'left', marginBottom: '32px', marginTop: '48px' }}>
          <h3 className="section-title" style={{ marginBottom: '16px', color: 'var(--gold)' }}>Ikan Asap Siap Makan</h3>
          <p style={{ color: 'white', marginBottom: '16px', textAlign: 'left', fontSize: '16px' }}>Paduan sempurna ikan asap tradisional dengan racikan sambal pedas khas pesisir yang siap saji.</p>
        </div>
        <div className="product-grid">
          {siapMakan.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="container" style={{paddingTop: '24px', paddingBottom: '24px', position: 'relative'}}>
        <div className="section-header" style={{justifyContent: 'center', textAlign: 'center'}}>
          <h2 className="section-title">{homeData.testimonials.title}</h2>
        </div>
        <div className="testi-carousel-wrapper" ref={trackRef}>
          <div className="testi-carousel">
            {homeData.testimonials.items.map((testi, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-header">
                  <div>
                    <div className="testi-name">{testi.name}</div>
                    <div className="testi-loc">{testi.location}</div>
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
      </section>
    
      <section className="faq-section" style={{ paddingTop: '24px' }}>
        <div style={{textAlign: 'left', marginBottom: '32px'}}>
          <h2 className="section-title">{homeData.faq.title}</h2>
        </div>
        
        {homeData.faq.items.map((faq, i) => (
          <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={i}>
            <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {faq.question} <ChevronDown className="faq-icon" size={20} />
            </button>
            <div className="faq-answer" style={{ maxHeight: openFaq === i ? '200px' : '0' }}>
              <div className="faq-answer-inner">{faq.answer}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
