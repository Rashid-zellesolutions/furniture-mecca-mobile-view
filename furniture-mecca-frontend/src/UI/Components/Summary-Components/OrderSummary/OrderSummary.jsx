import React, { useEffect, useState } from 'react'
import './OrderSummary.css'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';
import { useCart } from '../../../../context/cartContext/cartContext';
import { useOrder } from '../../../../context/orderContext/orderContext';
import axios from 'axios';
import { url } from '../../../../utils/api';

const OrderSummary = () => {
    // const selectedProducts = [
    //     {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
    //     {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
    //     {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
    //     {img: productImage, name: 'Harris Reclining Sofa and Loveseat *1', price: '$899', selectedColor: 'Black', selectedPackage: '2PC Sofa & LoveSeat'},
    // ]
    const orderSummeryDetails = [
        {title: 'Subtotal', price: '$3564'},
        {title: 'Protection Plane', price: '$3564'},
        {title: 'White Glove Delivery', price: '$3564'},
        {title: 'Tax', price: '$3564'},
    ]
    // const [showMoreProducts, setShowMoreProducts] = useState(1);
    // const handleShowMore = () => {
    //     setShowMoreProducts((prev) => prev > 1 ? 1 : selectedProducts.length)
    // }
    // const {cart} = useCart();
    // console.log("Cart data", cart)
    // const {order} = useOrder()
    // console.log("Order produts on summery page", order)

    // Card title words limit
    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };
    const formatePrices = (price) => {
        return Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    }

    // let subTotalPrice = 0;
    // // let calculateTotal = cart.map((item) => {
    // //     return subTotalPrice += item.product.priceTag
    // // })
    // const grandTotal = subTotalPrice + 230;
    // console.log("sub total price", subTotalPrice)
    // let formedSubTotalPrice = new Intl.NumberFormat('en-us', {
    //     style: 'currency',
    //     currency: 'USD'
    // }).format(subTotalPrice)

    

    // const formatedGrandTotal = Intl.NumberFormat('en-us', {
    //     style: 'currency',
    //     currency: 'USD'
    // }).format(grandTotal)
    const [orders, setOrders] = useState([])
    const getOrders = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/orders/get`)
            setOrders(response.data.orders);
            console.log("response orders", response.data.orders)
            console.log("orders state", orders[2].items[0].image)
        } catch (error) {
            console.error("order geting failed", error);
        }
    }
    useEffect(() => {
        getOrders()
    }, []);
    useEffect(() => {
        console.log("Updated orders state:", orders);
    }, [orders]);
    

  return (
    <div className='order-summary-main-container'>
        <h3 className='order-summery-main-heading'>Order Summary</h3>
        <div className='mobile-view-main-heading'>
            <h3>Order Summery</h3>
            <p>Edit</p>
        </div>
        <div className='order-summary-details'>
            <div className='order-summary-selected-products-container'>
                {orders && orders.map((items, index) => (
                    <div key={items._id} className='selected-products'>
                        <div className='selected-single-product'>
                            <img src={`${url}${items.items?.[0]?.image}`} alt='img' />
                            <div className='selected-product-containt'>
                                <span className='selected-product-name-and-price'>
                                    {/* <h3>{truncateTitle(items.items?.[0]?.name, maxLength)}</h3> */}
                                    {/* <h3>{items.items?.[index]?.name}</h3> */}
                                    <h3>Name</h3>
                                    <p>{formatePrices(items.total)}</p>
                                </span>
                                <span className='selected-product-color'>
                                    <p>Black</p>
                                </span>
                                <span className='selected-product-color'>
                                    <p>2 PC Sofa & Loveseat</p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='products-tax-and-total'>
                <span>
                    <p>Sub Total:</p>
                    <p>{formatePrices(orders[2].items[0].sub_total)}</p>
                </span>
                <span>
                    <p>Tax</p>
                    <p>{formatePrices(orders[2].tax)}</p>
                </span>
            </div>
            <div className='selected-product-total'>
                <span>
                    <h3>Total</h3>
                    <p>{formatePrices(orders[2].items[0].total)}</p>
                </span>
            </div>
        </div>
        <div className='mobile-view-order-summery-details'>
            <div className='mobile-view-pricing-details'>
                {/* {orderSummeryDetails.map((items, index) => (
                    <div className='mobile-view-single-price'>
                        <p>{items.title}</p>
                        <h3>{items.price}</h3>
                    </div>
                ))} */}
            </div>
            <div className='mobile-view-single-price'>
                <p>Total</p>
                <h3>$4900</h3>
            </div>
            <div className='mobile-view-order-summery-selected-orders'>
                {/* <h3>{selectedProducts.length} Items</h3> */}
                <div className='mobile-view-ordered-summery-selected-products'>
                    {/* {selectedProducts.slice(0, showMoreProducts).map((items, index) => (
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
                    ))} */}
                </div>
            </div>
                <div className='mobile-view-order-summery-view-all-products-btn-div'>
                    {/* <button onClick={handleShowMore}>{showMoreProducts > 1 ? 'Show Less' : 'Show More +'}</button> */}
                </div>
        </div>
    </div>
  )
}

export default OrderSummary
