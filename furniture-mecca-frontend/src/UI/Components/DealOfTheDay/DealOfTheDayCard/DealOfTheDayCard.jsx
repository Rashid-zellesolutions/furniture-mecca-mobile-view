import React, {useRef, useEffect, useState} from 'react';
import './DealOfTheDayCard.css';
import testImage from '../../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../../Assets/icons/Star 19.png'
import cartIcon from '../../../../Assets/icons/cart-bag-charcol.png';
import cartWhite from '../../../../Assets/icons/cart-bag-white.png'
import heartIcon from '../../../../Assets/icons/heart-charcol.png';
import heartWhite from '../../../../Assets/icons/heart-white.png'
import combinedArrows from '../../../../Assets/icons/multi-arrow-charcol.png'
import multiArrowWhite from '../../../../Assets/icons/multi-arrow-white.png'
import leftArrow from '../../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../../Assets/icons/right-arrow-white.png';


const products = [
  { id: 1, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews',  stock: 11, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 2, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 3, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 4, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 5, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 6, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 7, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 8, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 9, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 10, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 11, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 12, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  // Add more products here
];

const DealOfTheDayCard = ({index, name, star, review, price, newPrice, imgIcons, productmage, descount, handleDealCardClick, dealDayData,  handleHoverEnter, handleHoveLeave}) => {
  const cardIcons = [cartIcon, heartIcon, combinedArrows];
  const [isHovered, setIsHovered] = useState(0);

  const handleIconMouseEnter = (index) => {setIsHovered(index)}
  const handleIconMouseLeave = () => {setIsHovered(null)}

  // Deal of the day product name limitations
  const maxLength = 40;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };
    
  return (
    <div 
      index={index} 
      className='deal-of-the-day-product-card' 
      onClick={() => handleDealCardClick(dealDayData)}
    >
      <div 
          className='deal-of-the-day-product-rating-and-name'
        >
        <h3 className='deal-of-the-day-product-name'>
          {truncateTitle(name, maxLength)}
        </h3>
        <div 
          className='deal-of-the-day-price'>
          <del>${price}</del>
          <p>$ 1,599.00</p>
        </div>
        <div 
            className='deal-of-the-day-rating-and-reviews'>
          <div 
              className='deal-of-the-day-card-stars'>
            {star.map((items, innIndex) => (
              // <p className='deal-of-the-day-stars'>{items.icon}</p>
              <img 
                  key={innIndex} 
                  src={items.icon} 
                  alt='star' 
                />
            ))}
            </div>
          <p>({review})</p>
        </div>
      </div>
      <div className='deal-of-the-day-product-image'>
        <div className='deal-of-the-day-product-discount'><p>-12%</p></div>
        <img src={productmage} alt='img' />
        <div className='deal-of-the-day-card-icons-div'>
          {imgIcons.map((items, index) => (
            <button 
                key={index}  
                className={`deal-of-the-day-icon ${isHovered === index ? 'change-bg' : ''}`} 
                onMouseEnter={() => handleIconMouseEnter(index)} 
                onMouseLeave={handleIconMouseLeave}
              >
              <img 
                  src={isHovered === index ? items.hoveredIcon : items.defIcon} 
                  alt='icon'  />
            </button>
          ))}
        </div> 
      </div>
      {/* <div className='deal-of-the-day-product-under-line'></div> */}
    </div>
  );
};

export default DealOfTheDayCard;
