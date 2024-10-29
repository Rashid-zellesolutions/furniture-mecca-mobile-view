import React, { useState } from 'react'
import './OrderSummary.css'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';

const OrderSummary = () => {
    const selectedProducts = [
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
  return (
    <div className='order-summary-main-container'>
        <h3 className='order-summery-main-heading'>Order Summary</h3>
        <div className='mobile-view-main-heading'>
            <h3>Order Summery</h3>
            <p>Edit</p>
        </div>
        <div className='order-summary-details'>
            {selectedProducts.map((items, index) => (
                <div key={index} className='selected-products'>
                    <div className='selected-single-product'>
                        <img src={items.img} alt='img' />
                        <div className='selected-product-containt'>
                            <span className='selected-product-name-and-price'>
                                <h3>{items.name}</h3>
                                <p>{items.price}</p>
                            </span>
                            <span className='selected-product-color'>
                                <p> {items.selectedColor}</p>
                            </span>
                            <span className='selected-product-color'>
                                <p>{items.selectedPackage}</p>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className='products-tax-and-total'>
                <span>
                    <p>Sub Total:</p>
                    <p>$1899</p>
                </span>
                <span>
                    <p>Tax</p>
                    <p>$233</p>
                </span>
            </div>
            <div className='selected-product-total'>
                <span>
                    <h3>Total</h3>
                    <p>$233</p>
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
