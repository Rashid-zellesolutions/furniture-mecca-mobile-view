import React from 'react'
import './ShipBanner.css'

const ShipBanner = ({bannerImg, paddindTrue}) => {
  return (
    <div className={`banner-div ${paddindTrue ? 'padding-bottom' : ''}`}>
      <img src={bannerImg} alt="ship banner" />
    </div>
  )
}

export default ShipBanner

