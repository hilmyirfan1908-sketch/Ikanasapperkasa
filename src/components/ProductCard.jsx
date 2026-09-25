import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const waText = `Halo Admin, saya ingin memesan ${product.title}`;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <span className={`product-chip ${product.category}`}>
            {product.category === 'siap-makan' ? 'Siap Makan' : 'Frozen'}
          </span>
          <img src={product.images[0]} alt={product.title} style={{ objectFit: 'cover' }} />
        </div>
        <div className="product-info">
          <div className="product-header-row">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-price">{product.price}</div>
          </div>
          {product.description && product.description[0] && (
            <p className="product-short-desc">
              {product.description[0]}
            </p>
          )}
        </div>
      </Link>
      <div className="product-actions">
        <a 
          href={`https://wa.me/628111908119?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary product-card-btn"
        >
          <ShoppingCart size={16} /> Saya Mau Ini
        </a>
      </div>
    </div>
  );
}