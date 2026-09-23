import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Kualitas', path: '/kualitas' }
  ];

  return (
    <>
      <header className="header">
        <Link to="/" className="brand">
          <img src="/assets/images/logo.png" alt="Ikan Asap Perkasa Logo" className="logo-img" />
        </Link>
        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className="nav-menu">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          ))}
        </nav>
      
      {/* Mobile Menu */}
      <nav className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

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
          <div className="footer-right" style={{ padding: '40px 32px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <h3 className="footer-tagline" style={{ textAlign: 'left', marginBottom: '32px', fontSize: '20px' }}>Punya pertanyaan atau ingin pesan dalam jumlah besar?</h3>
            <div style={{ textAlign: 'center', marginTop: 'auto' }}>
              <a href="https://wa.me/628111908119" className="btn btn-primary footer-btn" target="_blank" rel="noopener noreferrer" style={{ width: 'auto', padding: '16px 40px', display: 'inline-block' }}>
                Hubungi Kami (WhatsApp)
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Ikan Asap Perkasa. Hak Cipta Dilindungi.
        </div>
      </footer>
    </>
  );
}
