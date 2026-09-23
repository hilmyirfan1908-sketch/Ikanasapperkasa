import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Kualitas', path: '/kualitas' }
  ];

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" alt="Ikan Asap Perkasa Logo" className="logo-img" />
        </Link>
        <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)}>
          <Menu />
        </button>
        <nav className="nav-menu">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.png" alt="Ikan Asap Perkasa Logo" className="logo-img" />
          </Link>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="mobile-nav-links">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="footer-brand"><img src="/assets/images/logo.png" alt="Ikan Asap Perkasa Logo" className="logo-img" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '12px'}} /> Ikan Asap Perkasa</div>
            <p className="footer-address">
              <strong>Pusat Pengasapan Tradisional</strong><br/>
              Jl. Pesisir Utara No. 45, Demak, Jawa Tengah, Indonesia<br/>
              Buka Setiap Hari: 08.00 - 17.00 WIB
            </p>
          </div>
          <div className="footer-right">
            <h3 className="footer-tagline">Punya pertanyaan atau ingin pesan dalam jumlah besar?</h3>
            <a href="https://wa.me/628111908119" className="btn btn-primary footer-btn" target="_blank" rel="noopener noreferrer">
              Hubungi Kami (WhatsApp)
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Ikan Asap Perkasa. Hak Cipta Dilindungi.
        </div>
      </footer>
    </>
  );
}
