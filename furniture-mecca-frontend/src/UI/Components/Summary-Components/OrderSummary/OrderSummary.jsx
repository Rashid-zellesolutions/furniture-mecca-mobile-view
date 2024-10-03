import React from 'react'
import './OrderSummary.css'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';

const OrderSummary = () => {
    const selectedProducts = [
        {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
        {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
    ]
  return (
    <div className='order-summary-main-container'>
        <h3>Order Summary</h3>
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
    </div>
  )
}

export default OrderSummary
