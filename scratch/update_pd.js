const fs = require('fs');
const path = require('path');

const basePath = '/Users/entrustinv278/Documents/Ikan Asap perkasa Website';

function genCard(title, price, img, chip, rating, sold) {
  const chipHtml = chip ? '<span class="product-chip">' + chip + '</span>' : '';
  return `          <a href="product-detail.html" class="product-card">
            <div class="product-image-container">
              ${chipHtml}
              <img src="${img}" alt="${title}">
            </div>
            <div class="product-info">
              <h3 class="product-title">${title}</h3>
              <div class="product-price">${price}</div>
              <div class="product-meta">
                <span class="product-meta-item"><i data-lucide="star"></i> ${rating}/10</span>
                <span>${sold} terjual</span>
              </div>
              <button class="btn btn-gold btn-sm product-card-btn">Pesan Sekarang</button>
            </div>
          </a>`;
}

const cards = [
  genCard("Ikan Manyung Asap Premium", "Rp 65.000", "https://images.unsplash.com/photo-1544025162-8111149c4c4f?auto=format&fit=crop&w=400&q=80", "Best Seller", "9.5", "1,204"),
  genCard("Ikan Tongkol Asap", "Rp 35.000", "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400&q=80", "", "9.2", "2,847"),
  genCard("Sambal Terasi Bakar Asap", "Rp 25.000", "https://images.unsplash.com/photo-1596632426989-12f71661cb38?auto=format&fit=crop&w=400&q=80", "Hot", "9.4", "3,100"),
  genCard("Ikan Bandeng Asap", "Rp 75.000", "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80", "Baru", "9.3", "2,100"),
  genCard("Kepala Manyung Jumbo", "Rp 85.000", "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=400&q=80", "", "9.6", "500")
].join('\n');

const newSection = `  <!-- OTHER PRODUCTS CAROUSEL -->
  <section class="container" style="padding-top: 48px; padding-bottom: 80px; border-top: 1px solid rgba(255,255,255,0.1);">
    <div class="section-header" style="flex-direction: column; align-items: flex-start; text-align: left; margin-bottom: 24px;">
      <h2 class="section-title">Produk Lainnya</h2>
      <p class="text-muted" style="margin-top: 8px;">Jelajahi produk favorit pelanggan lainnya yang sering dibeli bersamaan.</p>
    </div>
    
    <div class="product-carousel-container" style="position: relative;">
      <div class="product-carousel-wrapper">
        <div class="product-carousel" id="bestSellerCarousel">
${cards}
        </div>
      </div>
      <!-- Floating Arrows -->
      <button class="carousel-arrow left" id="scrollLeftBtn" aria-label="Scroll Left">
        <i data-lucide="chevron-left"></i>
      </button>
      <button class="carousel-arrow right" id="scrollRightBtn" aria-label="Scroll Right">
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  </section>`;

let html = fs.readFileSync(path.join(basePath, 'product-detail.html'), 'utf8');

// The section is bounded by <!-- OTHER PRODUCTS CAROUSEL --> and <!-- 65:35 FOOTER -->
const regex = /<!-- OTHER PRODUCTS CAROUSEL -->[\s\S]*?(?=<!-- 65:35 FOOTER -->)/;
html = html.replace(regex, newSection + '\n\n  ');

fs.writeFileSync(path.join(basePath, 'product-detail.html'), html);
console.log("product-detail.html updated successfully!");
