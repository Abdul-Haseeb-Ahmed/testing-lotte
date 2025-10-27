"use client";
import React, { useState, useEffect } from 'react';
import './Background.css';
import { images } from '../CloudinaryImagesUrl/ImagesUrl';
import UniversalImage from '../UniversalImage/UniversalImage';

function Background() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    images.background,
    images.bdImage2,
    images.bdImage3,
    images.bdImage4,
    images.bdImage5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="background-slider">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''} ${
            index === (currentSlide - 1 + slides.length) % slides.length ? 'prev' : ''
          }`}
        >
          <UniversalImage
            src={slide}
            alt={`Lotte Chemical Pakistan - Slide ${index + 1}`}
            fill={true}
            priority={index === 0}
            quality={90}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}

export default Background;