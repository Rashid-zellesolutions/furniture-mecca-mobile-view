import React from 'react'
import './HelpCenterBanner.css';
import HelpCenterImage from '../../../Assets/to-be-change/helpcenter.png';

const HelpCenterBanner = () => {
  return (
    <div className='help-center-banner'>
      <img src={HelpCenterImage} alt='help' />
    </div>
  )
}

export default HelpCenterBanner
