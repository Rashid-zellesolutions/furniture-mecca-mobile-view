import React, { useState } from 'react'
import './Summary.css';
import ShippingDetails from '../../Components/Summary-Components/ShippingDetails/ShippingDetails';
import OrderSummary from '../../Components/Summary-Components/OrderSummary/OrderSummary';
import Coupon from '../../Components/Summary-Components/Coupon/Coupon';
import PaymentMethod from '../../Components/Summary-Components/PaymentMethod/PaymentMethod';
import TrustFor from '../../Components/Summary-Components/Trust-for-varaities/TrustFor';
import HappyCustomers from '../../Components/Summary-Components/Happy-Customer/HappyCustomers';

const Summary = () => {

  return (
    <div className='summary-main-container'>
        <div className='summary-left-section'>
          <ShippingDetails />
          <OrderSummary />
          <Coupon />
          <PaymentMethod />  
        </div>
        <div className='summary-right-section'>
          <TrustFor />
          <HappyCustomers />
        </div>
    </div>
  )
}

export default Summary
