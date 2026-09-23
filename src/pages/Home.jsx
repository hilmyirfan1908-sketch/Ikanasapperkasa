import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ShieldCheck, Flame, Utensils, ThumbsUp, Medal, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="hero-wrapper">
        <img src="/assets/images/hero_ikan_asap.jpg" alt="Ikan Asap Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="hero-title">Lezatnya Ikan Asap<br/>Siap Saji</h1>
          <p className="hero-subtitle">Asli, Praktis, dan Penuh Rasa.</p>
          <div className="hero-fixed-cta">
            <Link to="/products" className="btn btn-primary" style={{width:'100%'}}>
              Lihat Produk Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="usp-wrapper">
        <div className="usp-box">
          <div className="usp-text-side">
            <h2 className="usp-title">Siap Santap, Tanpa Ribet</h2>
            <p className="usp-desc">Semua produk kami sudah matang sempurna melalui proses pengasapan tradisional. Cukup panaskan sebentar, langsung siap dinikmati bersama nasi hangat.</p>
          </div>
          <div className="usp-image-side">
            <img src="/assets/images/usp_1.jpg" alt="Ikan siap santap" />
          </div>
        </div>
        <div className="usp-box">
          <div className="usp-text-side">
            <h2 className="usp-title">Aroma Asap Asli</h2>
            <p className="usp-desc">Menggunakan kayu pilihan untuk menghasilkan aroma asap yang khas dan menggugah selera. Rasa gurih meresap hingga ke dalam serat daging.</p>
          </div>
          <div className="usp-image-side">
            <img src="/assets/images/usp_2.jpg" alt="Proses pengasapan" />
          </div>
        </div>
        <div className="usp-box">
          <div className="usp-text-side">
            <h2 className="usp-title">Tahan Lama & Higienis</h2>
            <p className="usp-desc">Dikemas vakum untuk menjaga kesegaran, kebersihan, dan cita rasa tanpa bahan pengawet buatan. Aman disimpan sebagai stok makanan andalan di rumah.</p>
          </div>
          <div className="usp-image-side">
            <img src="/assets/images/usp_3.jpg" alt="Kemasan higienis" />
          </div>
        </div>
      </section>

      <section className="container" style={{paddingTop:'64px'}}>
        <div className="section-header">
          <h2>Kualitas Terbaik</h2>
          <p className="text-gray" style={{marginTop:'8px'}}>Kenapa memilih Ikan Asap Perkasa?</p>
        </div>
        <div className="bento-grid">
          <div className="bento-item p-6">
            <div className="bento-icon"><Flame size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>100% Asap Alami</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Tanpa perasa buatan, murni dari kayu bakar pilihan.</p>
          </div>
          <div className="bento-item p-6">
            <div className="bento-icon"><ShieldCheck size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>Aman & Bersih</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Proses produksi standar tinggi dan kemasan vakum.</p>
          </div>
          <div className="bento-item p-6">
            <div className="bento-icon"><Utensils size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>Siap Saji</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Tinggal dipanaskan, hemat waktu masak Anda.</p>
          </div>
          <div className="bento-item p-6">
            <div className="bento-icon"><ThumbsUp size={32} color="var(--gold)" /></div>
            <h3 className="bento-title" style={{marginTop:'16px'}}>Rasa Terjamin</h3>
            <p className="text-gray" style={{fontSize:'14px', marginTop:'8px'}}>Gurih, lezat, dan selalu bikin nambah porsi nasi.</p>
          </div>
        </div>
      </section>
    </>
  );
}