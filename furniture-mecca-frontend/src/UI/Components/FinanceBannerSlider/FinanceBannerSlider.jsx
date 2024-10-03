import React, { useEffect, useState } from "react";
import './FinanceBannerSlider.css';
import paypalBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/New-Financing-WF-1.jpg';
import moveForword from '../../../Assets/Furniture Mecca/Landing Page/sale banner/New-Financing-AAF-1.jpg';

function FinanceBannerSlider() {
    const images = [
        paypalBanner,
        moveForword,
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervel)
    }, [images.length]);
  
  return (
    <div className="carousel-container">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => {
                return <div className="carousel-slide" key={index}>
                    <img src={image} alt={`slide ${index + 1}`} />
                </div>
            })}
        </div>
    </div>
  );
}

export default FinanceBannerSlider;
