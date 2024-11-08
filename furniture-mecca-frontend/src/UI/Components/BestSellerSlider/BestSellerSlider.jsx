import React, { useState, useRef, useEffect } from 'react';
import '@splidejs/react-splide/css'
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Home Page Banner 396x595.jpg';
import bestSellerMainSecondImage from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Bedroom Side Banners 2 (2).png';
import { Link, useNavigate } from 'react-router-dom';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import { useProducts } from '../../../context/productsContext/productContext';

import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';

const BestSellerPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`best-seller-arrow ${className}`} >
            <img src={leftArrow} alt='arrow' />
        </div>
    )
}

function BestSellerNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`best-seller-arrow ${className}`} >
            <img src={rightArrow} alt='arrow' />
        </div>
    )
}


const BestSellerSlider = () => {
    const navigate = useNavigate()
    const { products } = useProducts()
    
    // States for current page, cards per page, and loading
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage] = useState(6);
    const [totalPages] = useState(Math.ceil(products.length / cardsPerPage));
    const [applyFilter, setApplyFilter] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);
    const [loading, setLoading] = useState(false);
    const [activeItem, setActiveItem] = useState(0)
    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    const [mobIndex, setMobIndex] = useState(0)
    const [cardIndex, setCardIndex] = useState(0)

    const handleActiveItem = (index) => {
        setActiveItem(index)
        setLoading(true); // Show loader
        setTimeout(() => {
            setActiveItem(index);
            setLoading(false); // Hide loader after 2 seconds
        }, 1000);
    }
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
        nextArrow: <BestSellerNextArrow to="next" />,
        prevArrow: <BestSellerPrevArrow to="prev" />,
    };
    useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizer);
        return () => window.removeEventListener("resize", handleResizer)
    })

    // product slice to show 6 product maxx
    const handleCardClicked = (item) => {
        navigate(`/single-product/${item.slug}`, { state: { products: item } })
    }

    // mobile scripts
    const mobileSettings = {
        // className: "slider variable-width",
        className: 'center',
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        nextArrow: <BestSellerNextArrow to="next" />,
        prevArrow: <BestSellerPrevArrow to="prev" />,
    };
    
    const handleMobileNavClick = (index) => {
        setApplyFilter(true);
        setTimeout(() => {
            setApplyFilter(false);
            setMobIndex(index)
        }, 1000)
    }


    // State for the current page (used for pagination and translateX calculation)
    const [currentPage, setCurrentPage] = useState(0);

    // Function to handle page change on dot click
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Get the slice of products to display based on the current page
    const getDisplayedCards = () => {
        const start = currentPage * cardsPerPage;
        const end = start + cardsPerPage;
        return products.slice(start, end);
    };


    const handlePaginationClick = (index) => {
        // setCardIndex(index);
        const newIndex = Math.max(0, Math.min(products.length - 1, index));
        setCardIndex(newIndex);
    };

    const getDisplayedIndexes = () => {
        const halfVisible = 1; // Half of the dots
        const start = Math.max(0, currentIndex - halfVisible);
        const end = Math.min(totalPages - 1, start + 3);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const displayedIndexes = getDisplayedIndexes();

    return (
        <div className="best-seller-slider-container">

            <div className='best-seller-imaage-and-cards'>
                <div className='best-seller-slider-main-banner'>
                    <img src={activeItem === 0 ? BestSellerSliderMainBanner : bestSellerMainSecondImage} alt='main banner' />
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
                        <img src={activeItem === 0 ? BestSellerSliderMainBanner : bestSellerMainSecondImage} alt='main banner' />
                    </div>
                    <div className='products-slider-container'>

                        <div className='best-seller-slider-wrapper' style={{overflow: 'hidden'}}>
                            <div 
                                className='best-seller-slider' 
                                style={{ 
                                    transform: `translateX(-${(currentIndex / totalPages) * 100}%)` 
                                }}>
                                {/* {products.slice(currentIndex, currentIndex + cardsPerPage).map((item, index) => ( */}
                                {getDisplayedCards().map((item, index) => (
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
            </div>

            {/* Best Seller Mobile View */}
            <div className='mobile-view-best-seller-main-container'>
                <div className={`mobile-view-best-seller-loading ${applyFilter ? 'show-mobile-view-best-seller-filter' : ''}`}></div>
                <h3 className='mobile-view-best-seller-heading'>Best Seller</h3>
                <div className='mobile-view-nav-and-card-contaner'>

                    <div className='mobile-view-best-seller-menu-items'>
                        {bestSellerNav.map((items, index) => (
                            <p
                                className={`mobile-view-best-seller-nav ${mobIndex === index ? "mobile-view-nav-active" : ""}`}
                                onClick={() => handleMobileNavClick(index)}
                            >
                                {items}
                            </p>
                        ))}
                    </div>

                    <div className='mobile-view-slider-cards'>

                        <div
                            className='mobile-view-single-card-container'
                            style={{display: 'flex', transform: `translateX(-${cardIndex * 100}%)`, transition: 'transform 0.5s ease' }}
                        >
                            {products.slice(cardIndex, cardIndex + 1).map((item, index) => (
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

                        <div className='mobile-pagination-dots'>
                            {displayedIndexes.map((_, index) => (
                                <span
                                    key={index}
                                    className={`mobile-dot ${index === cardIndex ? 'mobile-active' : ''}`}
                                    onClick={() => handlePaginationClick(index)}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            </div>

            <div className='pagination-dots'>
                {/* {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handlePageChange(index)}
                    ></span>
                ))} */}
                {displayedIndexes.map((pageIndex) => (
                    <span
                        key={pageIndex}
                        className={`dot ${currentIndex === pageIndex ? 'active' : ''}`}
                        onClick={() => handlePageChange(pageIndex)} // Change page on dot click
                    >
                    </span>
                    ))}
            </div>

        </div>
    );
};

export default BestSellerSlider;
