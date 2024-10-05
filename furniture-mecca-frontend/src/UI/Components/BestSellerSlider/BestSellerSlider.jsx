import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Home Page Banner 396x595.jpg';
import bestSellerMainSecondImage from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 2 (2).png';
import heartIcon from '../../../Assets/icons/like.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import { useProducts } from '../../../context/productsContext/productContext';
import mobileHeadImage from '../../../Assets/Furniture Mecca/Landing Page/best seller products/mobile-view-main-image.png'

import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';

const BestSellerPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`best-seller-arrow ${className}`} >
        <img src={leftArrow} alt='arrow' />
      </div>
    )
    }
  
    function BestSellerNextArrow(props) {
      const { className, style, onClick } = props;
      return(
        <div onClick={onClick} className={`best-seller-arrow ${className}`} >
          <img src={rightArrow} alt='arrow'/>
        </div>
      )
    }


const BestSellerSlider = () => {


    const settings = {
        // className: "slider variable-width",
        className: 'center',
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        // arrows: false,
        nextArrow: <BestSellerNextArrow to="next"/>,
        prevArrow: <BestSellerPrevArrow to="prev" />,
      };

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizer);
        return () => window.removeEventListener("resize", handleResizer)
    } )


    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    
    const [loading, setLoading] = useState(false); 
    const [activeItem, setActiveItem] = useState(0)
    const navigate = useNavigate()

    const handleActiveItem = (index) => {
        setActiveItem(index)
        setLoading(true); // Show loader
        setTimeout(() => {
            setActiveItem(index);
            setLoading(false); // Hide loader after 2 seconds
        }, 1000);
    }
    // const productCardData = useSelector((state) => state.productCard.data)
    const {products} = useProducts()
    // const productCardData = products.products;
    // console.log("productCardData on Landing Page", products)
    
    // product slice to show 6 product maxx
    const handleCardClicked = (item) => {
        navigate(`/single-product/${item.slug}`, {state: {products: item}})
    }
    


    const cardsPerPage = 6; // Number of cards per page
    const totalPages = Math.ceil(products.length / cardsPerPage); 
    const [currentIndex, setCurrentIndex] = useState(0); // Current page index

    // Handle page change
    const handlePageChange = (index) => {
        setCurrentIndex(index);
    };


    // mobile scripts
    const [mobIndex, setMobIndex] = useState(0)
    const handleMobileNavClick = (index) => {
        setMobIndex(index);
    }
    


  return (
    <div className="best-seller-slider-container"> 
        <div className='best-seller-imaage-and-cards'>
            <div className='best-seller-slider-main-banner'>
                <img src={activeItem === 0 ?  BestSellerSliderMainBanner : bestSellerMainSecondImage} alt='main banner' />
            </div>
            <div className='best-seller-slider-div'>
                <div className='best-seller-slider-menu-bar'>
                    <h3>Best Seller</h3>
                    <div className='best-seller-menu-bar'>
                    {bestSellerNav.map((item, index) => (
                        <p
                            key={index}
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => handleActiveItem(index)}
                        >
                            {item}
                        </p>
                    ))}
                    </div>
                </div>
                <div className='best-seller-slider-main-banner-mobile-view'>
                    <img src={activeItem === 0 ?  BestSellerSliderMainBanner : bestSellerMainSecondImage} alt='main banner' />
                </div>
                <div className='products-slider-container'>
                    <div className='best-seller-slider' style={{ transform: `translateX(-${(currentIndex / totalPages) * 101}%)` }}>
                        {products.slice(currentIndex, currentIndex + cardsPerPage).map((item, index) => (
                            <BestSellerProductCard 
                                productData={item}
                                key={index} 
                                productMainImage={item.mainImage} 
                                starIcon={item.ratingStars} 
                                reviews={item.reviewCount} 
                                productName={item.productTitle} 
                                oldPrice={item.priceTag}
                                newPrice={item.priceTag}
                                handleCardClicked={() => handleCardClicked(item)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        <div className='mobile-best-seller'>
            <div className='mobile-best-seller-heading'>
                <h3>Best Seller</h3>
            </div>
            <div className='mobile-best-seller-menu'>
                <img src={mobileHeadImage} alt='mobile-head-image' />
                <div className='mobile-best-seller-menu-items'>
                    {bestSellerNav.map((items, index) => (
                        <p
                            className={mobIndex === index ? "mobile-nav-active" : ""}
                            onClick={() => handleMobileNavClick(index)}
                        >
                            {items}
                        </p>
                    ))}
                </div>
            </div>
                <div className='mobile-slider-cards'>
                    <Slider {...settings}>
                        {products.map((items, index) => (
                            <div style={{width: '100%', backgroundColor: 'blue', height: '250px'}}>
                                This is card {index}
                            </div>
                        ))}
                    </Slider>
                </div>
        </div>

        <div className='pagination-dots'>
            {Array.from({ length: totalPages }, (_, index) => (
                <span 
                    key={index} 
                    className={`dot ${currentIndex === index ? 'active' : ''}`} 
                    onClick={() => handlePageChange(index)}
                ></span>
            ))}
        </div>
        
    </div>
  );
};

export default BestSellerSlider;
