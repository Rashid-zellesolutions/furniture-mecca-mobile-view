import React, { useState, useEffect } from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
import CartPaymnetMethoud from '../CArtAddPaymentMethoud/CartPaymnetMethoud';
import { useCart } from '../../../../context/cartContext/cartContext';
import EmptyCart from '../Empty-Cart/EmptyCart';
// import CArtEmpty from './cart-empty/CArtEmpty';
// import CartEmpty from './cart-empty/CartEmpty';


const CartProducts = () => {
    const {cart, removeFromCart, increamentQuantity, decreamentQuantity, calculateTotalPrice} = useCart()

    const totalPrice = calculateTotalPrice();

    const formatedCartData = cart.map((item => {
        const {mainImage, productTitle, priceTag, quantity, id} = item.product
        return`Product: ${mainImage}, name: ${productTitle}, Price: ${priceTag}, Quntity: ${quantity}, id: ${priceTag} `;
    }))
    console.log("new Products Array", formatedCartData)

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

    const deliveryCharges = 50;
    const discountPrice = 10;
    const unFormedTotalPrice = calculateTotalPrice();
    const subTotal = deliveryCharges + unFormedTotalPrice;
    const finalTotal = subTotal - discountPrice;
    const formedDeliveryCharges = deliveryCharges.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const formedDiscountCharges = discountPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    }); 

    const formedSubTotalCharges = subTotal.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    const formatedTotalPrice = finalTotal.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const detailsDeta = [
        {title: 'Delivery', price: formedDeliveryCharges},
        {title: 'Discount', price: formedDiscountCharges},
        {title: 'Sub Total', price: formedSubTotalCharges},
        {title: 'Total', price: formatedTotalPrice}

    ]

    // console.log("cart products total price", cart[0].product.totalPrice)

  return (
    <>
    <div className='cart-products-main-container'>
        <div className='cart-products-heading'>
            <h3>Products ({cart.length})</h3>
            
        </div>
        <div className={`cart-items ${isOpen ? 'low-width' : ''}`}>
        {cart.length <= 0 && <EmptyCart /> }
            {cart.map((items, index) => {
                return <CartItems key={items.product.id}
                            onlyMobile={false}
                            cartIndex={items.product.id}
                            productsLength={cart.length}
                            handleRomoveProduct={() => removeFromCart(items.product.id)}
                            cartProductName={items.product.productTitle} 
                            cartPRoductImage={items.product.mainImage} 
                            cartProductColor={items.product.color} 
                            cartProductTitle={items.product.title}
                            cartSingleProductPrice={items.product.priceTag} 
                            isCartOpen={isOpen}
                            productColor={items.product.color}
                            quantity={items.quantity}
                            productTotalPrice={items.totalPrice}
                            handleIncreament={() => increamentQuantity(items.product.id)}
                            handleDecreament={() => decreamentQuantity(items.product.id)}
                            />
            })}
            
        </div>
        <div className='cart-item-details'>
            <div className='cart-item-details-heading'>
                <h3>Details</h3>
            </div>
            <div className='price-details-div'>
                {detailsDeta.map((item, index) => {
                    return <div key={index} className='price-details'>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>
                })}
            </div>
            <div className='continue-btn'>
                <button>
                    Continue
                </button>
                {/* <a href='#'>Continue</a> */}
            </div>
        </div>

        {/* Desktop View */}
        <div className={`desktop-cart-item-details ${isOpen ? 'desktop-cart-item-div-padding-decrease' : ''}`}>
            <div className={`desktop-price-details-div ${isOpen ? 'desktop-price-div-decrease' : ''}`}>
                {detailsDeta.map((item, index) => {
                    return <div key={index} className='dektop-price-details'>
                        <p className='desktop-price-title'>{item.title}</p>
                        <p className='desktop-price-total'>{cart.length > 0 ? item.price : '$0'}</p>
                    </div>
                })}
            </div>
            <div className={`desktop-continue-btn-div ${isOpen ? 'hide-continue-btn' : ''}`}>
                {/* <button onClick={handleToggle}>
                    Continue
                </button> */}
                <a href='/summery-page'>Continue</a>
            </div>
        </div>
        <CartPaymnetMethoud 
            isOpen={isOpen} 
            handleToggle={handleToggle}
        />
    </div>
    </>
  )
}

export default CartProducts
