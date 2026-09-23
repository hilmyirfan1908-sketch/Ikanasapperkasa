export default function Kualitas() {
  return (
    <>
      <section className="hero-wrapper" style={{ height: '40vh', minHeight: '300px' }}>
        <img src="/assets/images/kualitas_hero.jpg" alt="Kualitas Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="hero-title">Kualitas</h1>
          <p className="hero-subtitle">Komitmen kami pada kebersihan dan rasa</p>
        </div>
      </section>
      <section className="deep-usp-section">
        <div className="deep-usp-row">
          <div className="deep-usp-text">
            <h2>Pemilihan Bahan Baku Unggulan</h2>
            <p>Hanya menggunakan ikan segar pilihan terbaik hasil tangkapan harian. Kami memastikan setiap ikan yang masuk ke proses produksi telah melewati standar kualitas yang ketat, bebas bahan pengawet, dan dicuci bersih menggunakan air mengalir.</p>
          </div>
          <img src="/assets/images/usp_1.jpg" alt="Bahan baku" className="deep-usp-img" />
        </div>
      </section>
    </>
  );
}