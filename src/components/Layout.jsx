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
            <div className="footer-logo">
              <img src="/assets/images/logo.png" alt="Ikan Asap Perkasa Logo" className="logo-img" />
            </div>
            <p className="footer-tagline">Semua Orang Bisa Makan Ikan Asap Enak, Dimana Aja dan Kapan Aja!</p>
          </div>
          <div className="footer-right">
            <h3>Pesan Sekarang</h3>
            <p>Admin Ikan Asap Perkasa siap melayani pesanan Anda.</p>
            <a href="https://wa.me/628111908119" className="btn btn-primary footer-btn" target="_blank" rel="noopener noreferrer">
              Hubungi WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}