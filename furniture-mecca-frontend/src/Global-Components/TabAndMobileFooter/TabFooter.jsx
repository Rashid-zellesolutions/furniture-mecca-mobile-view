import React, { useEffect, useState } from 'react'
import './TabFooter.css';
import { Link } from 'react-router-dom';
import redFurnitureMecca from '../../Assets/global-images/furniture-mecca-red.jpeg'
import nearStore from '../../Assets/all-stores-location-images/venango-store.jpg'
import filledStar from '../../Assets/icons/Star 3.png';
import unFilledStart from '../../Assets/icons/Star 5.png';
import locationIcon from '../../Assets/icons/location.png'
import callIcon from '../../Assets/icons/call.png'
import mailIcon from '../../Assets/icons/mail.png'

import facebookIcon  from '../../Assets/icons/facebook.png';
import tiktokIcon from '../../Assets/icons/tiktok.png';
import youtubeIcon from '../../Assets/icons/youtube.png';
import instaIcon from '../../Assets/icons/instagram.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import addBtn from '../../Assets/icons/add-icon.png';
import { MdOutlineLocationOn } from "react-icons/md";
import { WiTime4 } from "react-icons/wi";
import { CiCalendarDate } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

import { FaRegCalendarPlus } from "react-icons/fa";



const TabFooter = () => {

    const [isTrue, setIsTrue] = useState(false)
    const [openIndex, setOpenIndex] = useState(null)

    const footerLinksData = [
        {name: 'Resource & Tour', icon: addBtn, text: 'This is Text'},
        {name: 'Resource & Tour', icon: addBtn, text: 'This is Text'},
        {name: 'Resource & Tour', icon: addBtn, text: 'This is Text'},
    ]

    const stars = [
        {icon: filledStar},
        {icon: filledStar},
        {icon: filledStar},
        {icon: filledStar},
        {icon: unFilledStart}

    ]

    const customerCare = [
        {item: 'Contact Us', link: '#'},
        {item: 'Financing', link: '#'},
        {item: 'Shipping & Delivery', link: '#'},
        {item: 'Terms & Conditions', link: '#'},
    ]

    const aboutUs = [
        {item: 'About Us', link: '#'},
        {item: 'Careers', link: '#'},
        {item: 'Store Locator', link: '#'},
        {item: 'Reviews', link: '#'},
        {item: 'My Account', link: '#'},
    ]

    const socialIcons = [
        {socialIcon: facebookIcon, socialLink: '#'},
        {socialIcon: tiktokIcon, socialLink: '#'},
        {socialIcon: youtubeIcon, socialLink: '#'},
        {socialIcon: instaIcon, socialLink: '#'},
    ]

    const contactData = [
        {icon: locationIcon, title: 'Philadelphia', link: '#'},
        {icon: callIcon, title: '215 352 1600', link: '#'},
        {icon: mailIcon, title: 'meccacustomercare@gmail.com', link: '#'}
    ]

    const handleDetailsToggle = () => {
        setIsTrue(true)
        console.log('show')
    }
    const handleDetailCloseToggle = () => {
        setIsTrue(false)
        console.log('hide')
    }

    const handleContaintShow = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }

  return (
    <div className='mobile-view-footer-main-container'>
        <div className='footer-first-section'>
            <div className={`first-section-show ${isTrue ? 'hide' : ''}`}>
                <div className='first-section-img'>
                    <h3>Nearest Store : </h3>
                    <img src={redFurnitureMecca} alt='img' />
                </div>
                <div className='footer-first-section-containt'>
                    <h3 >Manchester</h3>
                    <p className='hide-on-small'>(Opens At 10: 00 AM)</p>
                    <p className='hide-on-large'>Opens 10:00 AM</p>
                    <span onClick={handleDetailsToggle}><p>Details</p> <IoIosArrowDown size={20} /> </span>
                    
                </div>
            </div>    
            <div className={`details-container ${isTrue ? 'show' : ''}`}>
                        <img src={redFurnitureMecca} alt='red' />
                        <h3>Nearest Store: <span>Manchester</span></h3>
                        <p className='open-time'>(Opens at 10:00 AM)</p>
                        <p>428 Tolland Turnpike <br /> Manchester CT 06042</p>
                        <span>
                            <p>215 352 1600</p>
                            <p>mon-sat 10am - 8pm</p>
                            <p>sun 11am - 7pm</p>
                        </span>
                        <Link>View Direction</Link>
                        <Link>Book Appointment</Link>
                        <Link>Virtual Tour</Link>
                        <span onClick={handleDetailCloseToggle} className='close-togle'>
                            <p>Close</p><IoIosArrowUp size={30} />
                        </span>
                        
            </div>
            <div className='first-section-links-container'>
                {footerLinksData.map((item, index) => {
                    return <div key={index} className={`first-section-show-and-hide`}>
                        <div className='first-section-heading' onClick={() => handleContaintShow(index)}>
                            <h3>{item.name}</h3>
                            <img src={item.icon} alt='img' className={`add-and-close-btn ${openIndex === index ? 'rotate' : ''}`} />
                        </div>
                        <div className={`first-section-containt ${openIndex === index ? 'open-togle' : ''}`}>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className='footer-second-section'>
            <div className='footer-banner-and-links'>
                <div className='social-icon-and-banner'>
                    <div className='footer-social-icons'>
                        {socialIcons.map((item, index) => {
                            return <Link key={index} to={item.socialLink}>
                                <img src={item.socialIcon} alt="icon" />
                            </Link>
                        })}
                    </div>
                    <div className='footer-banner'>
                        <img src={redFurnitureMecca} alt='img' className='company-name-image' />
                        <div className='banner-content'>
                            <h3>Furniture Mecca</h3>
                            <div className='rating-starts-container'>
                                {stars.map((item, index) => {
                                    return <img key={index} src={item.icon} alt='start' />
                                })}
                            </div>
                            <p>847 Google Reviews</p>
                        </div>
                    </div>
                    <div className='contact-container'>
                        {contactData.map((item, index) => {
                            return <span key={index}>
                                <img src={item.icon} alt='img' />
                                <Link href={item.link}>{item.title}</Link>
                            </span>
                        })}
                    </div>
                </div>
                <div className='footer-about-and-contact-links'>
                <div className='tab-view-footer-nearby-store'>
                        <h3>Nearest Store</h3>
                        <div className='tab-view-nearby-store-details'>
                            <img src={nearStore} alt='img' />
                        </div>
                            <div className='tab-view-nearby-store-adress'>
                                <span>
                                    <MdOutlineLocationOn size={20} />
                                    <p>E Venango St, Philadelphia, PA 19134 <br /> Philadelphia, Pennsylvania, 101</p>
                                </span>
                                <span>
                                    <FiPhoneCall  size={15} />
                                    <p> 267 639 6801</p>
                                </span>
                                <span>
                                    <WiTime4 size={20} />
                                    <p>9:30 AM - 6:30 PM</p>
                                </span>
                                <span>
                                    <CiCalendarDate size={20} />
                                    <p>Monday - Sunday</p>
                                </span>
                                <div>
                                    <p>Outlet</p>
                                    <a href='#'>Direction</a>
                                    <a href='#'>Book an Appointment</a>
                                </div>
                            </div>
                        </div>
                    <div className='footer-customer-care'>
                        <h3>Customer Care</h3>
                        <div className='customer-care-links'>
                            {customerCare.map((item, index) => {
                                return <Link key={index} to={item.link}>{item.item}</Link>
                            })}
                        </div>
                    </div>
                    <div className='footer-customer-care'>
                        <h3>About Furniture Mecca</h3>
                        <div className='customer-care-links'>
                            {aboutUs.map((item, index) => {
                                return <Link key={index} to={item.link}>{item.item}</Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='terms-and-rights'>
                <p>
                © 2020 - 2024 Furniture Mecca. All Rights Reserved.
                </p>
                <p> Designed & Managed By <Link>Zelle Solutions</Link></p>
            </div>
            <div className='mobile-view-terms-and-rights'>
                <div className='ship-and-terms'>
                    <p>Shipping & Delivery</p>
                    <p>Terms & Condition</p>
                </div>
                <p>Designed & maintained by</p>
                <Link>Zelle Solutions</Link>
            </div>
        </div>
    </div>
  )
}

export default TabFooter
