import React, { useState } from 'react'
import './CartSidePannel.css';
import closeBtn from '../../../Assets/icons/close-btn.png'
import CartSideSection from './CartSideSection';
import cartBlack from '../../../Assets/icons/cart-bag-new.png';
import minusBtn from '../../../Assets/icons/minus-white.png';
import plusBtn from '../../../Assets/icons/plus-white.png';
import { Link } from 'react-router-dom';

const CartSidePannel = ({cartData, addToCartClicked, handleCartSectionClose, removeFromCart,decreamentQuantity, increamentQuantity}) => {
    console.log("Card Panel Data", cartData)
    const [singleCart, setSingleCart] = useState(cartData)
    console.log("single cart state: ", singleCart)
    return (
    <div 
        className={`cart-side-main-section ${addToCartClicked ? 'show-side-cart' : ''} `}
        onClick={handleCartSectionClose}
    >
            <button className='cart-section-close-btn' onClick={handleCartSectionClose}>
                <img src={closeBtn} alt='close btn' />
            </button>
            <div 
                className={`cart-side-section-containt-div ${addToCartClicked ? 'show-side-cart-containt' : ''}`}
                onClick={(e) => e.stopPropagation()}  
            >
                <div className='cart-section-heading-div'>
                    <div className='cart-side-section-cart-bag-div'>
                        <img src={cartBlack} alt='cart icon' />
                        <p className='cart-side-panel-item-count'>{(cartData.length)}</p>
                    </div>
                    <p>Your Cart </p>
                </div>
                <div className='cart-section-products'>
                    {cartData && cartData.map((items, index) => {
                        return  <CartSideSection
                            key={items.product.id}
                            handleItemRemove={() => removeFromCart(items.product.id)}
                            closeBtn={closeBtn}
                            productTitle={items.product.name}
                            mainImage={items.product.image}
                            priceTag={items.product.regular_price}
                            decreamentQuantity={() => decreamentQuantity(items.product.id)}
                            minusBtn={minusBtn}
                            quantity={items.quantity}
                            increamentQuantity={() => increamentQuantity(items.product.id)}
                            plusBtn={plusBtn}
                        />
                    })}
                </div>
                <div className='cart-side-section-buttons'>
                    <div className='cart-section-view-cart-and-checkout-btn'>
                        <Link to={'/add-to-cart'} className='cart-side-section-view-cart'>
                            View Cart
                        </Link>
                        <button className='cart-side-section-checkout'>
                            Checkout
                        </button>
                    </div>
                    <button className='cart-side-section-continue-shopping'>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
  )
}

export default CartSidePannel
