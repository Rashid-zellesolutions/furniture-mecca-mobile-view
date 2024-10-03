import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import ownerTag from '../../Assets/Logo/owner-tag.png';
import FooterNav from './FooterNav/FooterNav';
import footerRedFurnitureMecca from '../../Assets/global-images/furniture-mecca-red.jpeg'
import facebook from '../../Assets/icons/facebook-white.png'
import tiktok from '../../Assets/icons/tiktok-white.png'
import insta from '../../Assets/icons/insta-white.png'
import youtube from '../../Assets/icons/youtube-white.png'
import location from '../../Assets/icons/location.png'
import call from '../../Assets/icons/call.png'
import mail from '../../Assets/icons/mail.png'
import clock from '../../Assets/icons/white-clock.png'
import calander from '../../Assets/icons/white-calander.png'
import TabFooter from '../TabAndMobileFooter/TabFooter';
import filledStart from '../../Assets/icons/Star 3.png';
import unfilledStart from '../../Assets/icons/Star 5.png';
import nearStore from '../../Assets/Footer/venango-store-image.png';
import { MdOutlineLocationOn } from "react-icons/md";
import { WiTime4 } from "react-icons/wi";
import { CiCalendarDate } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

// import { FaRegCalendarPlus } from "react-icons/fa";
// import NearStorePopUp from '../../UI/Components/NearStorePopUp/NearStorePopUp';

const Footer = ({notLandingPage}) => {

    const footerNavLinks = [
        {
            heading: "Living Room", navItems: [
            {name: 'Living Room Sets', link: '#'},
            {name: 'Sofa & Lovaseat Sets', link: '#'},
            {name: 'Sectionals', link: '#'},
            {name: 'Reclining Furniture', link: '#'},
            {name: 'Sofas', link: '#'},
            {name: 'Sleeper Sofas', link: '#'},
            {name: 'Lovaseats', link: '#'},
            {name: 'Small Space Living Room', link: '#'},
            ]
        },
        {
            heading: "Bedroom", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers & Mirrir Sets', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Dining Rooms", navItems: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Pub Height Dining Sets', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers,Buffets & China Cabinates', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Mattresses", navItems: [
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Bed Frames', link: '#'},
                {name: 'Pillows', link: '#'},
                {name: 'Memory Foam Mattresses', link: '#'},
                {name: 'Box Spring', link: '#'},
                {name: 'Mattresses Protections', link: '#'},
                {name: 'Outlet', link: '#'},
            ]
        },
        {
            heading: "Kids", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Accent", navItems: [
                {name: 'Dining Room Sets', link: '#'},
                {name: 'Pub Height Dining Set', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers, Buffets & China Cabinets', link: '#'},
            ]
        },
        {
            heading: "Home Decor", navItems: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Sectionals', link: '#'},
                {name: 'Sofas', link: '#'},
                {name: 'Sleeper Sofas', link: '#'},
                {name: 'Love Seats', link: '#'},
                {name: 'Reclining Furniture', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Rugs", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Outlet", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
    ]
    const socialIcons = [
        {name: 'facebook', icon: facebook, link: 'https://www.facebook.com/myfurnituremecca'},
        {name: 'tiktok', icon: tiktok, link: 'https://www.tiktok.com/@myfurnituremecca?_t=8gcQvVGSaGI&_r=1'},
        {name : 'youtube', icon: youtube, link: 'https://www.youtube.com/@FurnitureMecca1'},
        {name: 'insta', icon: insta, link: 'https://www.instagram.com/myfurnituremecca/?igshid=MzRlODBiNWFlZA%3D%3D'}
    ]

    const locationPhoneMail = [
        {name: 'Philadelphia', icon: location, link: '#'},
        {name: '215 352 1600', icon: call, link: '#'},
        {name: 'meccacustomercare@gmail.com', icon: mail, link: '#'}
    ]

    const footerCustomerCareAndAbout = [
        {heading: 'Customer Care', navLinks: [
            {name: 'Contact Us', link: '#'},
            {name: 'Financing', link: '#'},
            {name: 'Shipping & Delivery', link: '#'},
            {name: 'Terms & Conditions', link: '#'},
        ]},
        {heading: 'About Furniture Mecca', navLinks: [
            {name: 'About Us', link: '#'},
            {name: 'Career', link: '#'},
            {name: 'Store Locations', link: '#'},
            {name: 'Reference', link: '#'},
            {name: 'My Account', link: '#'},
        ]},
    ]

    const stars = [
        {icon: filledStart},
        {icon: filledStart},
        {icon: filledStart},
        {icon: filledStart},
        {icon: unfilledStart},
    ]

    const nearStoreDetails = [
        {icon: location, details: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101'},
        {icon: call, details: '267 639 6801'},
        {icon: clock, details: '9:30 AM - 6:30 PM'},
        {icon: calander, details: 'Monday - Sunday'},
    ]

  return (
    <>
        <div className='footer-main-container'>
            <div className='footer-nav'>
                {footerNavLinks.map((items, index) => {
                    return <div key={index} className='footer-nav-links'>
                    <h3 className='footer-nav-link-heading'>{items.heading}</h3>
                    {items.navItems.map((item, innerIndex) => {
                        return <FooterNav key={innerIndex} link={item.link} linkName={item.name} />
                    })}
                </div>
                })}
            </div>
            <div className='footer-second-contant-section'>
                <div className='footer-left-section'>
                    <div className='left-section-contact'>
                        <div className='left-section-social-icons-div'>
                            {socialIcons.map((items, index) => (
                                <a key={index} href={items.link}>
                                    <img src={items.icon} alt='icon' />
                                </a>
                            ))}
                        </div>
                        <div className='footer-owner-tag'>
                            <img src={ownerTag} alt='owner tag' />
                            <div className='owner-tag-info'>
                                <p className='owner-tag-name'>FURNITURE MECCA</p>
                                <div className='tag-rating-stars'>
                                    {stars.map((item, index) => (
                                        <img key={index} src={item.icon} alt='star' />
                                    ))}
                                </div>
                                <p className='owner-tag-review'>847 Google Review</p>
                            </div>
                        </div>
                        <div className='footer-left-contact-section'>
                            {locationPhoneMail.map((item, index) => (
                                <span key={index}>
                                    <img src={item.icon} alt='icon' />
                                    <p>{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='left-section-location-section'>
                        <h3 className='footer-location-section'>Nearest Store</h3>
                        <div className='near-store-containt-section'>
                            <div className='near-store-image-div'>
                                <img src={nearStore} alt='near store image' />
                            </div>
                            <div className='near-store-details-section'>
                                {nearStoreDetails.map((item, index) => (
                                    <span key={index}>
                                        <img src={item.icon} alt='icon' />
                                        <p>{item.details}</p>
                                    </span>
                                ))}
                            </div>
                            <div className='appointment-and-outlet-div'>
                                <a href='#'>
                                    <p>Outlet</p>
                                </a>
                                <a href='#'>
                                    <p>Directions</p>
                                </a>
                                <a href='#'>
                                    <p>Book an Appointment</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-right-section'>
                    <div className={`footer-right-get-scoop ${notLandingPage ? 'show-footer-get-the-scoop' : ''}`}>
                        <h3>Get The Scoop</h3>
                        <div className='footer-get-scoop-and-conditions'>
                            <div className='footer-get-scoop-input-search'>
                                <input type='text' placeholder='Email' />
                                <button>Sign Me Up!</button>
                            </div>
                            <p>By signing up, you agree to our  Privacy Policy  and  Terms of Use.</p>
                        </div>
                    </div>
                    <div className='right-section-care-and-about'>
                        {footerCustomerCareAndAbout.map((item, index) => (
                            <div key={index} className='footer-costumer-care-and-about'>
                                <h3>{item.heading}</h3>
                                {item.navLinks.map((navItem, inn) => (
                                    <a key={inn} href={navItem.link} className='about-and-care-link'>
                                        {navItem.name}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className='footer-contact-section'>
                <div className='footer-social-icon-and-near-store-details'>
                <div className='footer-social-and-address-container'>
                    <div className='social-icons'>
                        {socialIcons.map((item, index) => {
                            return <Link key={index} to={item.link}>
                                <img src={item.icon} alt={item.name} />
                            </Link>
                        })}
                    </div>
                    <div className='rating-container'>
                        <img src={footerRedFurnitureMecca} alt="img" />
                        <div className='rating-stars-container'>
                            <h3>FURNITURE MECCA</h3>
                            <span className='rating-stars'>{stars.map((item, i) => {
                                return <img key={i} src={item.icon} alt='start' />
                            })}</span>
                            <p>847 Google Reviews</p>
                        </div>
                    </div>
                    <div className='location-phone-main-container'>
                        {locationPhoneMail.map((item, index) => {
                            return <span key={index} className='icon-and-name'>
                                <img src={item.icon} alt={item.name} />
                                <Link to={item.link}>{item.name}</Link>
                            </span>
                        })}
                    </div>
                </div>
                    <div className='footer-nearby-store'>
                        <h3>Nearest Store</h3>
                        <div className='nearby-store-details'>
                            <img src={nearStore} alt='img' />
                        </div>
                            <div className='nearby-store-adress'>
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
                                    <Link>Direction</Link>
                                    <Link>Book an Appointment</Link>
                                </div>
                            </div>
                    </div>

                    </div>
                        <div className='footer-get-scoop-and-about'>
                            <div className={`footer-get-the-scoop-main-section ${notLandingPage ? 'show-footer-scoop' : ''}`}>
                                <h3>Get the Scoop</h3>
                                <div className='footer-get-scoop-input-and-button'>
                                    <div className='footer-get-scoop-input'>
                                        <input type='text' placeholder='Email' />
                                    </div>
                                    <button>Sign Me Up!</button>
                                </div>
                                <p>By signing up. you agree to our Privacy Policy and Terms of Use</p>
                            </div>

                            <div className='footer-care-and-about-section'>
                            {footerCustomerCareAndAbout.map((items, index) => {
                                    return <div key={index} className='footer-care-and-about'>
                                        <h3>{items.heading}</h3>
                                        {items.navLinks.map((innerItem, innerIndex) => {
                                            return <Link className='footer-care-and-about-links' key={innerIndex} to={innerItem}>{innerItem.name}</Link>
                                        })}
                                    </div>
                                })}
                            </div>
                        </div>
            </div> */}
            <div className='footer-rights-reserved-container'>
                <p>2020 - 2024 Furniture Mecca. All Rights Reserved</p>
                <p>
                    <Link to={'https://zellesolutions.com/'}>Designed & Managed By Zelle Solutions</Link>
                </p>
            </div>
        </div>
        <div className='mobile-view-footer-main-div'>
            <TabFooter />
        </div>
    </>
  )
}

export default Footer
