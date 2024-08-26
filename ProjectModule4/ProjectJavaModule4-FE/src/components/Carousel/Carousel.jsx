import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fade out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true); // Start fade in effect
      }, 500); // This delay should match the fade out transition time in CSS
    }, 2500); // Total time before changing slide, including fade time

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);

  return (
    <div className={`carousel ${fadeIn ? 'fade-in' : 'fade-out'}`}>
      <div className="carousel-slide">
        <img src={slides[currentIndex].url} alt={slides[currentIndex].title} />
      </div>
    </div>
  );
};

export default Carousel;
