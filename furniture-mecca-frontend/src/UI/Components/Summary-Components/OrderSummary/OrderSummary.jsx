import React, { useState } from 'react'
import './OrderSummary.css'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';
import { useCart } from '../../../../context/cartContext/cartContext';
import { useOrder } from '../../../../context/orderContext/orderContext';

const OrderSummary = () => {
    const selectedProducts = [
        {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
        {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
        {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
        {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
    ]
    const orderSummeryDetails = [
        {title: 'Subtotal', price: '$3564'},
        {title: 'Protection Plane', price: '$3564'},
        {title: 'White Glove Delivery', price: '$3564'},
        {title: 'Tax', price: '$3564'},
    ]
    const [showMoreProducts, setShowMoreProducts] = useState(1);
    const handleShowMore = () => {
        setShowMoreProducts((prev) => prev > 1 ? 1 : selectedProducts.length)
    }
    const {cart} = useCart();
    console.log("Cart data", cart)
    const {order} = useOrder()
    console.log("Order produts on summery page", order)

    // Card title words limit
    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    let subTotalPrice = 0;
    let calculateTotal = cart.map((item) => {
        return subTotalPrice += item.product.priceTag
    })
    const grandTotal = subTotalPrice + 230;
    console.log("sub total price", subTotalPrice)
    let formedSubTotalPrice = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(subTotalPrice)

    

    const formatedGrandTotal = Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(grandTotal)
    

  return (
    <div className='order-summary-main-container'>
        <h3 className='order-summery-main-heading'>Order Summary</h3>
        <div className='mobile-view-main-heading'>
            <h3>Order Summery</h3>
            <p>Edit</p>
        </div>
        <div className='order-summary-details'>
            <div className='order-summary-selected-products-container'>
                {cart && cart.map((items, index) => (
                    <div key={items.product.id} className='selected-products'>
                        <div className='selected-single-product'>
                            <img src={items.product.mainImage} alt='img' />
                            <div className='selected-product-containt'>
                                <span className='selected-product-name-and-price'>
                                    <h3>{truncateTitle(items.product.productTitle, maxLength)}</h3>
                                    <p>${items.product.priceTag}</p>
                                </span>
                                <span className='selected-product-color'>
                                    <p>{items.product.color ? items.product.color : 'Black'}</p>
                                </span>
                                <span className='selected-product-color'>
                                    <p>{items.product.productItems ? items.product.productItems : '2 PC Sofa & Loveseat'}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='products-tax-and-total'>
                <span>
                    <p>Sub Total:</p>
                    <p>{formedSubTotalPrice}</p>
                </span>
                <span>
                    <p>Tax</p>
                    <p>$233</p>
                </span>
            </div>
            <div className='selected-product-total'>
                <span>
                    <h3>Total</h3>
                    <p>{formatedGrandTotal}</p>
                </span>
            </div>
        </div>
        <div className='mobile-view-order-summery-details'>
            <div className='mobile-view-pricing-details'>
                {orderSummeryDetails.map((items, index) => (
                    <div className='mobile-view-single-price'>
                        <p>{items.title}</p>
                        <h3>{items.price}</h3>
                    </div>
                ))}
            </div>
            <div className='mobile-view-single-price'>
                <p>Total</p>
                <h3>$4900</h3>
            </div>
            <div className='mobile-view-order-summery-selected-orders'>
                <h3>{selectedProducts.length} Items</h3>
                <div className='mobile-view-ordered-summery-selected-products'>
                    {selectedProducts.slice(0, showMoreProducts).map((items, index) => (
                        <div key={index} className='mobile-view-selected-single-product'>
                            <img src={items.img} alt='product-img' className='mobile-view-selectedProduct-image' />
                            <div className='mobile-view-order-summery-selected-product-content'>
                                <h3>{items.name}</h3>
                                <div className='mobile-view-selected-order-price-and-quantity'>
                                    <p>Qty: 2</p>
                                    <h3>{items.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <div className='mobile-view-order-summery-view-all-products-btn-div'>
                    <button onClick={handleShowMore}>{showMoreProducts > 1 ? 'Show Less' : 'Show More +'}</button>
                </div>
        </div>
    </div>
  )
}

export default OrderSummary
