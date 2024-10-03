import React, { useEffect, useState } from 'react'
import './TrendingNow.css'
import CustomSlider from '../CostumSlider/CostumSlider'
import trandinImage from '../../../Assets/Furniture Mecca/Landing Page/trending-now/tranding-slider-main-image.png'
import sofaChair from '../../../Assets/Furniture Mecca/Landing Page/trending-now/sofa.png'
import swivalChair from '../../../Assets/Furniture Mecca/Landing Page/trending-now/swival-chair.png'
import slideChair from '../../../Assets/Furniture Mecca/Landing Page/trending-now/slide-chair.png'
import cornerChair from '../../../Assets/Furniture Mecca/Landing Page/trending-now/corner.png'
import chaisChair from '../../../Assets/Furniture Mecca/Landing Page/trending-now/chaise.png'
import armlessChair from '../../../Assets/Furniture Mecca/Landing Page/trending-now/armless-chair.png'

const TrendingNow = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderImages = [trandinImage, trandinImage, trandinImage];
    const sliderItems = [armlessChair, cornerChair, swivalChair, slideChair, chaisChair, sofaChair]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [sliderImages.length]);
    
  return (
    <div className='trending-now-main-container'>
        <h3>Trending Now</h3>
        <div className='tranding-slider-and-categories'>
            <div className="tranding-slider">
                <div className="tranding-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {sliderImages.map((image, index) => (
                        <div className="tranding-slide" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='trending-items-cards'>
                {sliderItems.map((items, index) => (
                    <div key={index} className='tranding-item-category'>
                        <img src={items} alt='img' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TrendingNow
