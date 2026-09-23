import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const frozen = products.filter(p => p.category === 'frozen');
  const spicy = products.filter(p => p.category === 'spicy');

  return (
    <>
      <section className="hero-wrapper" style={{ height: '40vh', minHeight: '300px' }}>
        <img src="/assets/images/products_hero.jpg" alt="Products Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="hero-title">Produk Kami</h1>
          <p className="hero-subtitle">Pilihan lengkap Ikan Asap untuk hidangan keluarga</p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="section-header">
          <h2>Original Frozen Series</h2>
          <p className="text-gray" style={{ marginTop: '8px' }}>Siap masak, cocok untuk berbagai kreasi resep Anda.</p>
        </div>
        <div className="product-grid">
          {frozen.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="section-header" style={{ marginTop: '64px' }}>
          <h2>Spicy Sambal Series</h2>
          <p className="text-gray" style={{ marginTop: '8px' }}>Sudah dicampur sambal, tinggal santap dengan nasi hangat.</p>
        </div>
        <div className="product-grid">
          {spicy.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}