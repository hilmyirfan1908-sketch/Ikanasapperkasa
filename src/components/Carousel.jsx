import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ images, altPrefix }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth;
      trackRef.current.scrollBy({ left: dir === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="pdp-image">
      <div className="pdp-carousel-container">
        <div className="pdp-carousel-track" ref={trackRef}>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`${altPrefix} - Image ${idx + 1}`} />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button className="pdp-arrow prev" onClick={() => scroll('prev')} aria-label="Previous image">
              <ChevronLeft />
            </button>
            <button className="pdp-arrow next" onClick={() => scroll('next')} aria-label="Next image">
              <ChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
}