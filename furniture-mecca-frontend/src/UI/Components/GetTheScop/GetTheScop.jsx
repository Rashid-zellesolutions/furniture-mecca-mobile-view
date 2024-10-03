import React from 'react'
import './GetTheScop.css';
import banner from '../../../Assets/global-images/flyre-image.jpg'

const GetTheScop = () => {
  return (
    <>
      <div className='get-the-scop-main-container'>
        <div className='get-the-scop-form-container'>
          <div className='get-the-scop-form'>
              <h3>Get the scoop</h3>
              <span className='get-the-scop-offers'>
                  <a href='#'> Discounts</a> | 
                  <a href='#'> Offers</a> |
                  <a href='#'> Best Price</a>
              </span>
              <div className='get-the-scop-input'>
                  <input type='text' placeholder='Email Address' />
                  <button><a>Sign me up</a></button>
              </div>
              <p>By Signing Up you agree to our Terms of Use and Privacy Policy</p>
          </div>
        </div>
        <div className='get-the-scop-banner'>
            <h3>Furniture Mecca Promotions</h3>
            <p>Get Exclusive Promotions For The Year 2024</p>
            <button> <a href='#'> Click To See FLyer </a> </button>
        </div>
      </div>
      <div className='mobile-view-scop-main-container'>
        <h3>Get the scoop</h3>
        <p>New products, Outlet deals, <br /> style trends and ways to save</p>
        <div className='mobile-view-scoop-email-input'>
          <input type='search' placeholder='Email Address' />
          <button>Sign me up</button>
        </div>
        <p>By signing up, you agree to our <br /> <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Use</a></p>
      </div>
    </>
  )
}

export default GetTheScop
