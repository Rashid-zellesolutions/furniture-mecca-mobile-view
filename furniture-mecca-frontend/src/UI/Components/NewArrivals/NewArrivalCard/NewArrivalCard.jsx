import React, {useState} from 'react'
import './NewArrivalCard.css';
import { Link } from 'react-router-dom';

const NewArrivalCard = ({arrivalImage, pieces, title, price, addToCartLink, addToCardIcon, addToCart, viewAllLink,viewAllIcon, viewAll, cardIndex  }) => {
    const [cartHoverIndex, setCartHoverIndex] = useState(null);
    const handleCartHover = (cardIndex) => {
      setCartHoverIndex(cardIndex);
    }
    const handleCardHoverLeave = () => {
      setCartHoverIndex(null)
    }

    return (
    <div key={cardIndex} className='card' >
        <div className='card-header'> 
            <img src={arrivalImage} alt='img' />
            <span className='pieces-text'>{pieces}</span>
            <span className='title-and-price'>
                <p className='new-arrival-product-name'>{title}</p>
                <p className='new-arrival-product-price'>{price}</p>
            </span>
        </div>
        <div className='card-buttons'>
            <Link to={addToCartLink} onMouseEnter={() => handleCartHover(cardIndex)} onMouseLeave={handleCardHoverLeave}>
                <img src={addToCardIcon} alt='icon' />
                <p>{addToCart}</p>
            </Link>
            <Link to={viewAllLink}>
                {viewAllIcon}
                <p>{viewAll}</p>
            </Link>
        </div>
    </div>
  )
}

export default NewArrivalCard
