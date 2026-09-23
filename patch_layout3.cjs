const fs = require('fs');
let layout = fs.readFileSync('src/components/Layout.jsx', 'utf8');

layout = layout.replace(
  /<button className="menu-toggle" onClick=\{\(\) => setMobileMenuOpen\(true\)\}>\s*<Menu \/>\s*<\/button>/,
  '<button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>\n          {mobileMenuOpen ? <X /> : <Menu />}\n        </button>'
);

const mobileMenuStart = layout.indexOf('<div className={`mobile-menu');
const navLinksStart = layout.indexOf('<nav className="mobile-nav-links">');
layout = layout.substring(0, mobileMenuStart) + '<nav className={`mobile-menu ${mobileMenuOpen ? \'active\' : \'\'}`}>\n          {navLinks.map(link => (\n            <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className={location.pathname === link.path ? \'active\' : \'\'}>\n              {link.name}\n            </Link>\n          ))}\n        </nav>\n      </header>' + layout.substring(layout.indexOf('</header>', navLinksStart) + 9);

fs.writeFileSync('src/components/Layout.jsx', layout.replace('</header>\n      </header>', '</header>'));
