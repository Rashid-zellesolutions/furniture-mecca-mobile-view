import React, {useState, useRef, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DealOfTheDay.css';
import { useProducts } from '../../../context/productsContext/productContext';

import DealOfTheDayCard from './DealOfTheDayCard/DealOfTheDayCard';
import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';


import testImage from '../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
// import star from '../../../Assets/icons/Star 19.png'
import cartIcon from '../../../Assets/icons/cart-bag-charcol.png';
import cartWhite from '../../../Assets/icons/cart-bag-white.png'
import heartIcon from '../../../Assets/icons/heart-charcol.png';
import heartWhite from '../../../Assets/icons/heart-white.png'
import combinedArrows from '../../../Assets/icons/multi-arrow-charcol.png'
import multiArrowWhite from '../../../Assets/icons/multi-arrow-white.png'
import { IoStar } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <img src={leftArrow} alt='arrow' />
    </div>
  )
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <img src={rightArrow} alt='arrow'/>
      </div>
    )
  }

// const products = [
//   { id: 1, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%',
//   },
//   { id: 2, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 8, sold: 30, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 3, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 15, sold: 80, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 4, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 5, sold: 20, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 5, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 10, sold: 50, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 6, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 8, sold: 30, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 7, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 15, sold: 80, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 8, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 5, sold: 20, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 9, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 10, sold: 50, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 10, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 8, sold: 30, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 11, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 15, sold: 80, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   { id: 12, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$199.00', newPrice: '$ 1,599.00', imageUrl: testImage, rating: '200', stock: 5, sold: 20, stars: [
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//     {icon: <IoStar size={14} />},
//   ], imgIcons: [
//     {defIcon: cartIcon, hoveredIcon: cartWhite},
//     {defIcon: heartIcon, hoveredIcon: heartWhite},
//     {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
//   ], disc: '-12%', 
//   },
//   // Add more products here
// ];

 

const DealOfTheDay = () => {
  const navigate = useNavigate();
  const imgIcons = [
    {defIcon: cartIcon, hoveredIcon: cartWhite},
    {defIcon: heartIcon, hoveredIcon: heartWhite},
    {defIcon: combinedArrows, hoveredIcon: multiArrowWhite},
  ]

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    // Deal of the day timer
    const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-04T21:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const padZero = (num) => String(num).padStart(2, '0');

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: padZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Destructure timeLeft
  const { days, hours, minutes, seconds } = timeLeft;

  const {products} = useProducts()
  const handleDealCardClick = (items) => {
    // navigate(`/single-product/${items.slug}`, {state: {products: items}})
  }
  


  return (
    <div className='deal-of-the-day-main-container'> 
          <div className='deal-of-the-day-border-heading'>
            <p>Deal Of The Day</p>
            <div className='deal-of-the-day-end-time'>
              <p>end in: {days}d : {hours}h : {minutes}m : {seconds}s</p>
            </div>
          </div>
      <div className='deal-of-the-day-outer-container'>
          <div className='slider-main-container'>
            <Slider {...settings}>
              {products.map((items, index) => (
                      <DealOfTheDayCard
                        key={index} 
                        productmage={items.mainImage}
                        dealDayData={items}
                        name={items.productTitle} 
                        star={items.ratingStars}
                        review={items.reviewCount} 
                        price={items.priceTag}
                        newPrice={items.newPrice}
                        imgIcons={imgIcons}
                        descount={items.disc}
                        handleDealCardClick={() => handleDealCardClick(items)}
                      />
              ))}
            </Slider>
          </div>
      </div>
  </div>
  )
}

export default DealOfTheDay
