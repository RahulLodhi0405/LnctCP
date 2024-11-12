import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for animations
import './Gallery.css'; // Custom styles
import img1 from '../Assets/Priyanshu.png'; // Import your images
import img2 from '../Assets/Rahul.png';
import img3 from '../Assets/Rahul.png';

const Gallery = () => {
  const images = [img1, img2, img3]; // Add as many images as needed

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
