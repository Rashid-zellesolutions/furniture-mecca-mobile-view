import React from 'react'
import './CartSidePannel.css';
import closeBtn from '../../../Assets/icons/close-btn.png'
import CartSideSection from './CartSideSection';
import cartBlack from '../../../Assets/icons/big-black-cart.png';
import minusBtn from '../../../Assets/icons/minus-white.png';
import plusBtn from '../../../Assets/icons/plus-white.png';

const CartSidePannel = ({cartData, addToCartClicked, handleCartSectionClose, removeFromCart,decreamentQuantity, increamentQuantity}) => {
  return (
    <div className={`cart-side-main-section ${addToCartClicked ? 'show-side-cart' : ''} `}>
            <button className='cart-section-close-btn' onClick={handleCartSectionClose}>
                <img src={closeBtn} alt='close btn' />
            </button>
            <div className={`cart-side-section-containt-div ${addToCartClicked ? 'show-side-cart-containt' : ''}`}>
                <div className='cart-section-heading-div'>
                    <img src={cartBlack} alt='cart icon' />
                    <p>Your Cart {(cartData.length)}</p>
                </div>
                <div className='cart-section-products'>
                    {cartData.map((items, index) => {
                        return  <CartSideSection
                            key={items.product.id}
                            handleItemRemove={() => removeFromCart(items.product.id)}
                            closeBtn={closeBtn}
                            productTitle={items.product.productTitle}
                            mainImage={items.product.mainImage}
                            priceTag={items.product.priceTag}
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
                        <a href='/add-to-cart' className='cart-side-section-view-cart'>
                            View Cart
                        </a>
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
