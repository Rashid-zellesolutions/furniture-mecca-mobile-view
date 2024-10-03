import React from 'react';
import './CategoriesGetScop.css';
import imgOne from '../../../Assets/Furniture Mecca/Landing Page/get the scope/Rectangle 917.png'
import imgTwo from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 921.png'
import imgThree from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 925.png'
import img from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 926.png'


const CategoriesGetScop = ({isTrue}) => {

    const productText = [
        {
            heading: 'Exclusive Dining Room', 
            para: 'A smart, useful dining area is the heart of the home, where friends and family love to gather and where you create meals to share with loved ones'
        },
        {
            heading: 'Take A Seat On The Table', 
            para: `Dining tables come in many styles, allowing you to find a set that fits your personality. Your table anchors your space, so find it and separate 
            dining chairs to customize the look to match your style. If you have a unique eating space, look for breakfast nooks, bar & pub tables, or bar stools to pull 
            up to a counter.`
        },
        {
            heading: 'Seek Out Stylish Storage', 
            para: `Buffets, sideboards, and credenzas are great furniture additions that are also practical for storage. For example, use the top to serve food and keep 
            your china and silver in the drawers and shelves. Or pick up a china cupboard to display your serving ware.`
        },
        {
            heading: 'Add Entertaining Essentials', 
            para: `When hosting guests, pub tables and bistro sets give you more seating and encourage socializing. Also, wine cabinets, home bars, and serving carts 
            make it easy for your guests to toast your hospitality and admire your stylish space.`
        },
        {
            heading: 'Personalize Your Space', 
            para: `Start with your current kitchen and dining rooms, and add style, color, and personality to make your space reflect your taste. At Furniture Mecca, 
            you can explore various inspirations that might be perfect for you.`
        },

    ]
    
  return (
    <div className='scop-main-container'>
        <div className='scop-contact-container'>
            <div className='heading-and-links'>
                <h3>Get The Scop</h3>
                <span> <a href='#'>Offer</a> | <a href='#'>Discounts</a> | <a href='#'>Best Prices</a> </span>
            </div>
            <div className='scop-input'>
                <div className='scop-input-email'>
                    <input type='text' placeholder='Email' />
                    <button>
                        <a href='#'>Sign me up</a>
                    </button>
                </div>
                <p>By Signing up, you agree to our Privacy Policy and Terms of use</p>
            </div>
        </div>
        <div className={`product-text-details ${isTrue ? 'show' : ''}`}>
            <div className='product-text'>
                {productText.map((item, index) => {
                    return <div key={index} className='text-details'>
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                    </div>
                })}
            </div>
            <div className='image-gallery-slider'>
                <div className='vertical-slider'>
                    <img className='img-one' src={imgOne} alt='img' />
                    <img className='img-one' src={imgOne} alt='img' />
                    <img className='img-one' src={imgOne} alt='img' />
                    <img className='img-one' src={imgOne} alt='img' />
                </div>
                <div className='vertical-slider'>
                    <img className='img-two' src={imgOne} alt='img' />
                    <img className='img-two' src={imgOne} alt='img' />
                    <img className='img-two' src={imgOne} alt='img' />
                    <img className='img-two' src={imgOne} alt='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoriesGetScop
