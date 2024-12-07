import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
   
    { src: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg', alt: 'Gallery Image 2', title: 'Glowing Forest' },
    { src: 'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg', alt: 'Gallery Image 3', title: 'AI Artistry' },
    { src: 'https://i0.wp.com/www.clicandoeandando.com/wp-content/uploads/2017/09/Como-Fotografar-Paisagens-Com-Lente-Grande-Angular-Ubatuba.jpg', alt: 'Gallery Image 4', title: 'Infinite Horizon' },
  ];

  const openLightbox = (imgSrc) => setLightboxImage(imgSrc);

  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="gallery-container">
      <div id="particle-background"></div>
      <h1 className="gallery-title">CodersArena Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(item.src)}
          >
            <img src={item.src} alt={item.alt} loading="lazy" className="gallery-image" />
            <div className="image-title">{item.title}</div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img className="lightbox-image" src={lightboxImage} alt="Fullscreen" />
          <button className="close-lightbox">&times;</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
