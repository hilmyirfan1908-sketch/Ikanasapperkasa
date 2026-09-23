const fs = require('fs');

const productsJSX = `import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const frozen = products.filter(p => p.category === 'frozen');
  const spicy = products.filter(p => p.category === 'spicy');

  return (
    <>
      <section className="hero-wrapper" style={{ height: '50vh', minHeight: '400px' }}>
        <div className="hero-slide">
          <img src="/assets/images/products_hero.jpg" alt="Katalog Produk" className="hero-bg" />
          <div className="hero-overlay">
            <div className="hero-content-inner" style={{ textAlign: 'left' }}>
              <h1 className="hero-title text-white">Katalog Produk</h1>
              <p className="hero-desc">Jelajahi berbagai pilihan ikan asap premium dan sambal khas Pantai Utara yang diolah secara tradisional setiap hari.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ textAlign: 'left', marginBottom: '32px' }}>
          <h2 className="section-title" style={{ marginBottom: '16px', color: 'var(--gold)' }}>Ikan Asap Original</h2>
          <p style={{ color: 'white', marginBottom: '16px', textAlign: 'left', fontSize: '16px' }}>Pilihan ikan asap utuh kualitas premium yang dikemas vakum beku untuk menjaga kesegaran dan cita rasa tradisional khas Pantai Utara.</p>
        </div>
        <div className="product-grid">
          {frozen.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div style={{ textAlign: 'left', marginBottom: '32px', marginTop: '64px' }}>
          <h2 className="section-title" style={{ marginBottom: '16px', color: 'var(--gold)' }}>Ikan Asap Sambal</h2>
          <p style={{ color: 'white', marginBottom: '16px', textAlign: 'left', fontSize: '16px' }}>Paduan sempurna ikan asap tradisional dengan racikan sambal pedas khas pesisir yang siap saji.</p>
        </div>
        <div className="product-grid">
          {spicy.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '48px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="section-title" style={{ marginBottom: '16px', color: 'var(--gold)' }}>Mau Lauk yang Beda?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '32px', fontSize: '16px' }}>Chat lewat whatsapp kami untuk melakukan pesanan custom di luar katalog produk.</p>
          <a href="https://wa.me/628111908119?text=Halo%20Admin,%20saya%20ingin%20melakukan%20pesanan%20custom" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', justifyContent: 'center', minWidth: '200px' }}>
            Chat Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync('src/pages/Products.jsx', productsJSX);
