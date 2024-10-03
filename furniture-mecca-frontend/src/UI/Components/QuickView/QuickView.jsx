import React, { useEffect, useState } from 'react'
import './QuickView.css';
import filledStar from '../../../Assets/icons/orange-star.png';
import unFilledStar from '../../../Assets/icons/orange-star-outline.png';
import testimage from '../../../Assets/Furniture Mecca/product archive page/product images/Dakota-Dining-Set-01-600x400 1.png';
import imgTwo from '../../../Assets/Furniture Mecca/product archive page/product images/Dining-Room-Set-in-Gold-01-600x400 1.png';
import imgThree from '../../../Assets/Furniture Mecca/product archive page/product images/Zora-600x400 1.png';
import imgVariantOne from '../../../Assets/Furniture Mecca/product archive page/product images/Moondance-Bedroom-Set-01-1024x644 2 (1).png';
import imgVariantTwo from '../../../Assets/Furniture Mecca/product archive page/product images/Sherry-Set-01-300x200 1 (1).png';
import minusBtn from '../../../Assets/icons/minus.png'
import plusBtn from '../../../Assets/icons/plus.png';
import redHeart from '../../../Assets/icons/red-heart.png'
import arrowDown from '../../../Assets/icons/arrow-down-white.png';
import arrowLeft from '../../../Assets/icons/arrow-left.png';
import arrowRight from '../../../Assets/icons/arrow-right.png';
import CartSidePannel from '../Cart-side-section/CartSidePannel';
import { useProducts } from '../../../context/productsContext/productContext';
import { useCart } from '../../../context/cartContext/cartContext';

const QuickView = ({setQuickViewProduct}) => {
    
    const {products} = useProducts()
    const {cart, addToCart, cartSectionOpen, setCartSectionOpen, increamentQuantity, decreamentQuantity, removeFromCart, calculateTotalPrice} = useCart();
    console.log("product data", cart)
    const [showCart, setShowCart] = useState(false);
    const handleCartSectionOpen = () => {
        setShowCart(true);
        addToCart(setQuickViewProduct)
    }
    const handleCartSectionClose = () => {
        setShowCart(false)
    }

    const stars = [filledStar, filledStar, filledStar, filledStar, unFilledStar]
    const [viewDetails, setViewDetails]= useState(null)
    const handleViewDetails = (index) => {
        setViewDetails(prevIndex => (prevIndex === index ? null : index));
    }

    const sliderImages = [testimage, imgTwo, imgThree]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
    };

    const quickViewData = [
        {name: 'Spacifications', 
            para: `Well, let's face it. Coordinating living room furniture – including fabrics, 
                pillows, colors, and sizes – can be exhausting! A living room set is an effective 
                and convenient way to complete your living space, while eliminating the stress of 
                matching sofas, chairs and ottomans. Don’t lose sleep over whether that loveseat`,
        },
        {name: 'Weight & Dimension', 
            para: `Well, let's face it. Coordinating living room furniture – including fabrics, 
                pillows, colors, and sizes – can be exhausting! A living room set is an effective 
                and convenient way to complete your living space, while eliminating the stress of 
                matching sofas, chairs and ottomans. Don’t lose sleep over whether that loveseat`,
        }
    ]

    const [productQuantity, setProductQuantity] = useState(0) 
    const plusProductQuantity = () => {setProductQuantity(productQuantity + 1)}
    const minusProductQuantity = () => {setProductQuantity(prevCount => (prevCount == 1 ? 1 : productQuantity - 1))}
    


  return (
    <div className='quick-view-main'>
        <div className='quick-view-heading-and-rating'>
            <h3>{setQuickViewProduct.productTitle}</h3>
            <div className='quick-view-rating'>
                <div className='quick-view-start'>
                    {setQuickViewProduct.ratingStars && setQuickViewProduct.ratingStars.map((star, index) => (
                        <img key={index} src={star.icon} alt='star' />
                    ))}
                </div>
                <p>{setQuickViewProduct.reviewCount}</p>
                
            </div>
        </div>
        <div className='quick-view-image-and-variations'>
            <div className="quick-view-slider">
                <button className={`quick-view-arrow quick-view-left ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev}>
                    <img src={arrowLeft} alt='left' />
                </button>
                <div className="quick-view-slider-container">
                    <div className="quick-view-slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {setQuickViewProduct.productAllImages && setQuickViewProduct.productAllImages.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index + 1}`} />
                    ))}
                    </div>
                </div>
                <button className={`quick-view-arrow quick-view-right ${currentIndex === sliderImages.length - 1 ? 'disabled' : ''}`} onClick={handleNext}>
                    <img src={arrowRight} alt='right' />
                </button>
            </div>
            <div className='quick-view-variations'>
                {setQuickViewProduct.colorVariation && setQuickViewProduct.colorVariation.map((item, index) => (
                    <div className='quick-view-var-one'>
                        <img src={imgVariantOne} alt='variation' />
                        <p>{item.color}</p>
                    </div>
                ))}
            </div>
        </div>
        <h3 className='quick-view-price'>${setQuickViewProduct.priceTag}</h3>
        <div className='quick-view-add-item-or-cart-btn'>
            <div className='quick-view-add-or-minus-item'>
                <button onClick={decreamentQuantity}>
                    <img src={minusBtn} alt='minus' />
                </button>
                <p>{setQuickViewProduct.quantity}</p>
                <button onClick={increamentQuantity}>
                    <img src={plusBtn} alt='plus' />
                </button>
            </div>
            <img src={redHeart} alt='heart' className='quickview-heart-icon'/>
            <button className='quick-view-add-to-cart' onClick={handleCartSectionOpen}>
                Add To Cart
            </button>
        </div>
        <div className='quick-view-details-section'>
            {quickViewData.map((items, index) => (
                <div key={index} className='quick-view-detail-single-section'>
                    <div className='quick-view-details-heading' onClick={() => handleViewDetails(index)}>
                        <p>{items.name}</p>
                        <button >
                            <img src={arrowDown} alt='arrow down' className={viewDetails === index ? 'quick-view-rotate-up' : 'quick-view-rotate-down'} />
                        </button>
                    </div>
                    <div className={`quick-view-details ${viewDetails === index ? 'show-details' : ''}`}>
                        <p>{items.para}</p>
                    </div>
                </div>
            ))}
            
        </div>
        <CartSidePannel 
            cartData={cart}
            addToCartClicked={showCart}
            handleCartSectionClose={handleCartSectionClose} 
            removeFromCart={removeFromCart}
            decreamentQuantity={decreamentQuantity}
            increamentQuantity={increamentQuantity}
        />
    </div>
  )
}

export default QuickView
