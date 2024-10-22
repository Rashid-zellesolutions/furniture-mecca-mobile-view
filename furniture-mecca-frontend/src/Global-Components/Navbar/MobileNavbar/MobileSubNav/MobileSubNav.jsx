import React from 'react'
import './MobileSubNav.css'
import crossBtn from '../../../../Assets/icons/close-btn.png';
import mainLogo from '../../../../Assets/Logo/m_logo_360 2.png'

const MobileSubNav = ({openSubNav, setOpenSubNav, subNavHeading}) => {
    const handleCloseSubNav = () => {
        setOpenSubNav(false)
    }
  return (
    <div className={`mobile-sub-navbar ${openSubNav ? 'show-sub-nav' : ''}`}>
        <button className='close-sub-nav' onClick={handleCloseSubNav}>
            <img src={crossBtn} alt='close btn' />
        </button>
        <div className='mobile-sub-nav-head'>
            <img src={mainLogo} alt='main-logo' />
        </div>
        <div className='mobile-sub-nav-body'>
            <h3 className='category-heading'>{subNavHeading}</h3>
        </div>
    </div>
  )
}

export default MobileSubNav
