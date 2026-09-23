import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <span className={`product-chip ${product.category}`}>
          {product.category === 'spicy' ? 'Spicy' : 'Frozen'}
        </span>
        <img src={product.images[0]} alt={product.title} style={{ objectFit: 'cover' }} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-info-container">
          <div className="product-price">{product.price}</div>
        </div>
      </div>
    </Link>
  );
}