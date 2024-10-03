import React from 'react'
import './AlsoNeed.css';
import imageOne from '../../../Assets/Furniture Mecca/product page/comment images/default_name 7.png';
import imageTwo from '../../../Assets/Furniture Mecca/product page/comment images/default_name 8.png';
import imageThree from '../../../Assets/Furniture Mecca/product page/comment images/default_name 9.png';
import filledStar from '../../../Assets/icons/Star 19.png';

const AlsoNeed = () => {
    const mightNeedData = [
        {
            name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
                filledStar,filledStar,filledStar,filledStar, filledStar
            ], reviewCount: '(200)', img: imageOne 
        },
        {
            name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
                filledStar,filledStar,filledStar,filledStar, filledStar
            ], reviewCount: '(200)', img: imageTwo 
        },
        {
            name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
                filledStar,filledStar,filledStar,filledStar, filledStar
            ], reviewCount: '(200)', img: imageThree 
        }
    ]
  return (
    <div className='might-need-main-container'>
        <h3>You Might Also Need</h3>
        <div className='might-need-cards-main-container'>
            {mightNeedData.map((item, index) => (
                <div key={index} className='might-need-product-card'>
                    <img src={item.img} alt='img' />
                    <div className='you-might-need-product-contant'>
                        <h3>{item.name}</h3>
                        <p>{item.colorAndCategory}</p>
                        <p className='might-need-product-price'>{item.price}</p>
                        <span className='might-need-product-rating'>
                            {item.filledStars.map((star) => (
                                <img src={star} alt='star' />
                            ))}
                            <p>({item.reviewCount})</p>
                        </span>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default AlsoNeed
