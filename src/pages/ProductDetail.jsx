import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="container" style={{padding: '64px'}}>Product not found!</div>;

  const recommended = [
    products.find(p => p.id === 'ikan-pari-frozen'),
    products.find(p => p.id === 'ikan-tongkol-frozen'),
    products.find(p => p.id === 'salem-sambal'),
    products.find(p => p.id === 'ayam-sambal'),
  ].filter(Boolean);

  const waText = `Halo Admin, saya ingin memesan ${product.title}`;

  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <Link to="/">Home</Link> &gt; <a href="/#products">Products</a> &gt; 
          <span className="text-white font-medium" style={{marginLeft: '4px'}}>{product.title}</span>
        </div>
      </div>

      <section className="container pdp-layout">
        <Carousel images={product.images} altPrefix={product.title} />

        <div className="pdp-info">
          <h1 className="pdp-title">{product.title}</h1>
          <div className="pdp-price">{product.price}</div>
          
          <div className="pdp-desc" style={{ marginTop: '16px' }}>
            {product.weight && <p><strong>Berat bersih:</strong> {product.weight}</p>}
            {product.portion && <p><strong>Porsi untuk:</strong> {product.portion}</p>}
            {product.description.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pdp-cta-wrapper">
            <a 
              href={`https://wa.me/628111908119?text=${encodeURIComponent(waText)}`} 
              className="btn btn-primary"
            >
              <ShoppingCart size={20} /> Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '64px', paddingBottom: '64px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ marginBottom: '32px' }}>Produk Lainnya</h2>
        <div className="product-grid">
          {recommended.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}