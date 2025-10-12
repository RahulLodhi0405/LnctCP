// src/components/Gallery/Gallery.js
import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="ga-coming-wrap">
      <div className="ga-coming-card">
        <h1 className="ga-coming-title">Gallery</h1>
        <p className="ga-coming-sub">Coming Soon...</p>
        <div className="ga-loader"></div>
      </div>
    </div>
  );
};

export default Gallery;
