"use client";
import React, { useState, useEffect } from "react";
import "./Background.css";
import { images } from "../CloudinaryImagesUrl/ImagesUrl";
import UniversalImage from "../UniversalImage/UniversalImage";

function Background() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    images.background,
    images.bdImage2,
    images.bdImage3,
    images.bdImage4,
    images.bdImage5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="background-section">
      <div className="background-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <UniversalImage
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Background;
