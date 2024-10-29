import React, { useState } from 'react'
import './Summary.css';
import ShippingDetails from '../../Components/Summary-Components/ShippingDetails/ShippingDetails';
import OrderSummary from '../../Components/Summary-Components/OrderSummary/OrderSummary';
import Coupon from '../../Components/Summary-Components/Coupon/Coupon';
import PaymentMethod from '../../Components/Summary-Components/PaymentMethod/PaymentMethod';
import TrustFor from '../../Components/Summary-Components/Trust-for-varaities/TrustFor';
import HappyCustomers from '../../Components/Summary-Components/Happy-Customer/HappyCustomers';
import ShipingAndDelivery from '../../Components/Summary-Components/ShippingAndDelivery/ShipingAndDelivery';
import PaymentInfo from '../../Components/Summary-Components/PaymentInfo/PaymentInfo';

const Summary = () => {

  const checkoutSections = [
    { id: 1, name: 'Delivery' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Review' },
  ]
  const [currentId, setCurrentId] = useState(1)
  const handleNavClick = (id) => {
    setCurrentId(id);
  }

  return (
    <div className='summary-main-container'>
      <div className='summary-left-section'>
        <div className='checkout-pages-toggle-nav'>
          {checkoutSections.map((items,) => (
            <span 
              key={items.id} 
              onClick={() => handleNavClick(items.id)}
              className={`checkout-page-toggle-nav-single-item 
                ${currentId === items.id ? 'active-checkout-toggle' : ''}`} 
              >
              <p>{items.id}.</p>
              <p>{items.name}</p>
            </span>
          ))}
        </div>
        {
          currentId === 1 ? <div className='shipping-details-and-coupen-show'>
            <ShippingDetails />
            <Coupon />
          </div>:
          currentId === 2 ? <PaymentMethod /> : <div className='order-summery-and-proceed-btn'> 
            <ShipingAndDelivery />
            <PaymentInfo />
            <OrderSummary />
            <div className='order-summery-proceed-btn-div'>
              <button>
                Place Order
              </button>
            </div>
          </div>
          
        }

      </div>
      <div className={` ${currentId === 1 ? 'summary-right-section' : currentId === 2 ? 'summery-right-section-according-payment' : 'summery-right-section-low-height' }`}>
        <TrustFor />
        <HappyCustomers />
      </div>
    </div>
  )
}

export default Summary
