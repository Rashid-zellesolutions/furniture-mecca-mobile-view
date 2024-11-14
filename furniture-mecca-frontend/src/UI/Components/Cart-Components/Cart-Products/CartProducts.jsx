import React, { useState, useEffect } from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
import CartPaymnetMethoud from '../CArtAddPaymentMethoud/CartPaymnetMethoud';
import { useCart } from '../../../../context/cartContext/cartContext';
import EmptyCart from '../Empty-Cart/EmptyCart';
import DeliveryOptions from '../../DeliveryOptions/DeliveryOptions';
import deliveryTruck from '../../../../Assets/icons/delivery.png';
import  locationIcon from '../../../../Assets/icons/location-red.png';
import MobileCart from '../Mobile-Cart/MobileCart';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../../../context/orderContext/orderContext';
import axios from 'axios';
import { url } from '../../../../utils/api';
// import CArtEmpty from './cart-empty/CArtEmpty';
// import CartEmpty from './cart-empty/CartEmpty';


const CartProducts = () => {
    const { cart, removeFromCart, increamentQuantity, decreamentQuantity, calculateTotalPrice, toggleProtection } = useCart()
    const [orderPayload, setOrderPayload] = useState({
        status: 'pending',
        currency: "USD",
        billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "123 Main St",
            city: "Anytown",
            state: "CA",
            postal_code: "90210",
            country: "USA",
            email: "john.doe@example.com",
            phone: "123-456-7890"
        },

        payment_method: "cash_on_delivery",
        items: [],
        discount: 10,
        tax: 5,
        cart_protected: 0,
        is_shipping:1,
        shipping_cost: 10
    })

    console.log("new cart attributes payload", cart);

    const [isOpen, setIsOpen] = useState(false);
    const [checkoutFixed, setCheckoutFixed] = useState(true);

    const totalPrice = calculateTotalPrice();
    const deliveryCharges = 50;
    const discountPrice = 10;
    const subTotal = deliveryCharges + totalPrice;
    const finaleTotal = subTotal - discountPrice

    const formatedPrice = (price) => price.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
    const detailsDeta = [
        {
            title: 'Delivery', price: formatedPrice(deliveryCharges),
        },
        {
            title: 'Discount', price: formatedPrice(discountPrice)
        },
        {
            title: 'Sub Total', price: formatedPrice(subTotal)
        },
        {
            title: 'Total', price: formatedPrice(finaleTotal)
        },
    ]

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    
    const handleScroll = () => {
        if(window.scrollY > 250){
            setCheckoutFixed(false);
            console.log(window.scrollY)
        }
        else{
            setCheckoutFixed(true);
            console.log(window.scrollY)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [protectAll, setProtectAll] = useState(false);
    const handleProtectAll = () => {
        setProtectAll(!protectAll)

        // console.log("cart with protection", cart)

    }  
    
    const [issingleProtected, setIsSingleProtected] = useState(false);
    const [protectedSingleCart, setProtectedSingleCart] = useState([])
    const handleSingleProtected = (item) => {
        // setIsSingleProtected(!issingleProtected)
        // console.log("value getted", issingleProtected)
        // const protectionStates = !issingleProtected
        // const newUpdatedValue = {
        //     ...item,
        //     product
        // }
        // setProtectedSingleCart(newUpdatedValue)
        // console.log("single Protection update", newUpdatedValue)
        // console.log("payload updated", protectedSingleCart)
    }


    const navigate = useNavigate();
    const handleNavigateToCheckoutPage = () => {
        console.log("Cart before adding to order:", cart);
        navigate(`/cart-page/check-out`);
    }
    // console.log("cart products total price", cart[0].product.totalPrice)
    // console.log("cart my data: ", cart[0].product.regular_price)
    const {addOrders} = useOrder() 
    const handleSaveOrders = async () => {
        const valueFromCart = cart.map(product => ({
            name: product.product.name,
            product_id: product.product.uid,
            quantity: product.product.quantity,
            is_protected: product.product.is_protected,
            sku: product.product.sku,
            image: product.product.image.image_url
        }))
        console.log("updated values of card", valueFromCart)
        const updatedOrderPayload = {
            ...orderPayload,
            items: valueFromCart
        }
        // setOrderPayload(prevState => ({
        //     ...prevState,
        //     items: valueFromCart
        // }))
        console.log("destructure cart", cart)
        console.log("Ordered Payload to check", updatedOrderPayload)
        addOrders(updatedOrderPayload)
        navigate(`/cart-page/check-out`);
        // try {
        //     const response = await axios.post(`${url}/api/v1/orders/add`, updatedOrderPayload)
        //     console.log(response)
        //     navigate(`/cart-page/check-out`);
        // } catch (error) {
        //     console.error("error adding order", error);   
        // }
    }
    
    
    return (
        <>
            <div className='cart-products-main-container'>
                <div className='cart-products-heading'>
                    <h3>Products ({cart.length})</h3>
                    <button 
                        className={`protect-all-products-button ${protectAll ? 'protect-all-products-button-true' : ''}`}
                        onClick={handleProtectAll}
                    >
                        Protect All
                    </button>

                </div>
                <div className={`cart-items ${isOpen ? 'low-width' : ''}`}>
                    {cart.length <= 0 && <EmptyCart />}
                    {cart.map((items, index) => {
                        return <CartItems
                            key={items.product.uid}
                            onlyMobile={false}
                            issingleProtected={issingleProtected}
                            handleSingleProtected={() => handleSingleProtected(items)}
                            // isAllProtected={protectAll}
                            cartIndex={items.product.uid}
                            productsLength={cart.length}
                            handleRomoveProduct={() => removeFromCart(items.product.uid)}
                            cartProductName={items.product.name}
                            cartPRoductImage={items.product.image?.image_url}
                            // cartProductColor={items.product.color}
                            cartProductTitle={items.product.name}
                            cartSingleProductPrice={items.product.regular_price}
                            isCartOpen={isOpen}
                            // productColor={items.product.color}
                            quantity={items.product.quantity}
                            productTotalPrice={items.product.total_price}
                            productSubTotal={items.product.sub_total}
                            handleIncreament={() => increamentQuantity(items.product.uid)}
                            handleDecreament={() => decreamentQuantity(items.product.uid)}
                        />
                    })}
                </div>
                <div className='mobile-cart-items'>
                    {cart.length <= 0 && <EmptyCart />}
                    {cart.map((items, index) => (
                        <MobileCart 
                            key={items.product.uid}
                            // onlyMobile={false}
                            cartIndex={items.product.uid}
                            // productsLength={cart.length}
                            handleRomoveProduct={() => removeFromCart(items.product.uid)}
                            productName={items.product.name}
                            productImg={items.product.image?.image_url}
                            // cartProductColor={items.product.color}
                            // cartProductTitle={items.product.title}
                            productAccesories={'2 Piece Sofa & Love Seat'}
                            productSinglePrice={items.product.regular_price}
                            // isCartOpen={isOpen}
                            // productColor={items.product.color}
                            productColor={'black'}
                            productQuantity={items.product.quantity}
                            productsTotalPrice={items.product.totalPrice}
                            handleIncreament={() => increamentQuantity(items.product.uid)}
                            handleDecreament={() => decreamentQuantity(items.product.uid)}

                        />
                    ))}
                </div>
                <div className='mobile-view-cart-order-summery'>
                    <div className='mobile-view-head'>
                        <h3>Order Summery</h3>
                        <span>
                            <p>Deliver to: </p>
                            <p>06402</p>
                        </span>
                    </div>
                    <div className='mobile-view-sub-total-and-protection'>
                        <div className='mobile-sub-total-protection'>
                            <p>Subtotal</p>
                            <p>$31564</p>
                        </div>
                        <div className='mobile-sub-total-protection'>
                            <p>Protection</p>
                            <p>$100</p>
                        </div>
                    </div>
                    <div className='mobile-tax-section'>
                        <p>Tax</p>
                        <p>$15</p>
                    </div>

                    <div className='mobile-delivery-options'>
                        <h3 className='mobile-delivery-option-heading'>Delivery Options:</h3>
                        <div className='mobile-single-delivery-option'>
                            <input type='radio' />
                            <img src={deliveryTruck} alt='delivery-icon' />
                            <div className='mobile-single-delivery-details'>
                                <h3>Bobtastic Delivery: White Glove or threshold</h3>
                                <p>Get it in 3 to 7 day. Schedule delivery in checkout </p>
                            </div>
                        </div>
                        <div className='mobile-single-delivery-option'>
                            <input type='radio' />
                            <img src={locationIcon} alt='delivery-icon' />
                            <div className='mobile-single-delivery-details'>
                                <h3>Pickup not available at Manchester</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${checkoutFixed ? 'mobile-view-total-and-checkout-fixed' : 'mobile-view-total-and-checkout'}`}>
                    <div className='mobile-view-total'>
                        <p>Total</p>
                        <p>$1998.00</p>
                    </div>
                    <button className='mobile-view-checkout-btn' onClick={handleNavigateToCheckoutPage}>
                        Check out
                    </button>
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
                        <button onClick={handleNavigateToCheckoutPage}>Continue</button>
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
