import React, {useState, useEffect} from 'react'
import './Haider.css';
import logo from '../../Assets/Logo/m_logo_360 2.png'
import searchIcon from '../../Assets/icons/search-icon-charcol.png';
import NearStoreIcon from '../../Assets/icons/home.png';
import HeartIcon from '../../Assets/icons/like.png';
import cartIcon from '../../Assets/icons/cart2.png';
import profileIcon from '../../Assets/icons/profile.png'
import locationIcon from '../../Assets/icons/location-red.png';
import navToggler from '../../Assets/icons/Union.png'
import searchRed from '../../Assets/icons/search-red.png'
import Nav from '../Navbar/Nav';
import TabMenu from '../Navbar/TabMenu/TabMenu';
import NearStorePopUp from '../../UI/Components/NearStorePopUp/NearStorePopUp';
import { MdOutlineStars } from "react-icons/md";
import { Link } from 'react-router-dom';
import usaFlag from '../../Assets/icons/usa-flage.png'
import LocationPopUp from '../../UI/Components/LocationPopUp/LocationPopUp';
import LanguagePopUp from '../../UI/Components/LanguagePopUp/LanguagePopUp';
import PromotionalBanner from '../../UI/Components/PromotionalBanner/PromotionalBanner';
import CartSidePannel from '../../UI/Components/Cart-side-section/CartSidePannel';
import { useCart } from '../../context/cartContext/cartContext';
import { useProducts } from '../../context/productsContext/productContext';

const Haider = () => {
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false)
  const {products} = useProducts()
    const {cart, addToCart, cartSectionOpen, setCartSectionOpen, increamentQuantity, decreamentQuantity, removeFromCart, calculateTotalPrice} = useCart()
  const handleCartSectionOpen = () => {
    setShowCart(true)
  }
  const handleCartSectionClose = () => {
    setShowCart(false)
  }

  const handleTabMenu = () => {
    setIsTabMenuOpen(!isTabMenuOpen)
  }

  const navLinks = [
      {name: "Living Room", link: '/living-room', hasDropdown: true},
      {name: "Bedroom", link: '/bedroom', hasDropdown: true},
      {name: "Dining Room", link: '/dining-room', hasDropdown: true},
      {name: "Mattresses", link: '/mattresses', hasDropdown: true},
      {name: "Kids", link: '/kids', hasDropdown: true},
      {name: "Accent Furniture / Rugs", link: '/accent-furniture-and-rugs', hasDropdown: true},
      {name: "Small Spaces", link: '/small-spaces', hasDropdown: true},
      {name: "Outlets", link: '/outlets', hasDropdown: true},
      {name: "Labor Day Sale", link: '/tent-sale', hasDropdown: true},
      
  ]
  const [nearStorePopUp, setNearStorePopUp] = useState(false)
  const handleNearStorePopUp = () => {
    setNearStorePopUp(true)
  }

  const handleCloseNearStoreModal = () => {
    setNearStorePopUp(false)
    console.log("near stor pop up", nearStorePopUp)
  }

  const storeDetailsData = [
    {
        city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
        address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
        outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
            {day: 'Sunday', time: '06: 30 PM'},
            {day: 'Monday', time: '06: 30 PM'},
            {day: 'Tuesday', time: '06: 30 PM'},
            {day: 'Wednesday', time: '06: 30 PM'},
            {day: 'Thursday', time: '06: 30 PM'},
            {day: 'Friday', time: '06: 30 PM'},
            {day: 'Saturday', time: '06: 30 PM'},
        ],
        virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
    },
    {
      city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
      address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
      outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
          {day: 'Sunday', time: '06: 30 PM'},
          {day: 'Monday', time: '06: 30 PM'},
          {day: 'Tuesday', time: '06: 30 PM'},
          {day: 'Wednesday', time: '06: 30 PM'},
          {day: 'Thursday', time: '06: 30 PM'},
          {day: 'Friday', time: '06: 30 PM'},
          {day: 'Saturday', time: '06: 30 PM'},
      ],
      virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
  }
]

  // Language Modal Script
  const [changeLanguage, setChangeLanguage] = useState(false)
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState('');
  const [currentSelectedCountryFlag, setCurrentSelectedCountryFlag] = useState();
  
  const handleLanguageModal = () => {
    setChangeLanguage(true)
  }

  const handleCLoseLanguageModal = () => {
    setChangeLanguage(false);
  }

  // Location Modat script
  const [searchLocation, setSearchLocation] = useState(false);
  const handleSearchModal = () => {
    setSearchLocation(true)
  }
  const handleCloseSearch = () => {
    setSearchLocation(false)
    console.log("close btn cicked", searchLocation)
  }

  return (
    <div className='haider-main-container'>
          
      {/* Banner Responsive */}
      <PromotionalBanner 
        handleLanguageModal={handleLanguageModal} 
        currentSelectedCountryFlag={currentSelectedCountryFlag} 
        usaFlag={usaFlag} 
        currentSelectedCountry={currentSelectedCountry} 
      />

      <div className='header'>
        <div className='logo-container'>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className='search-bar-container'>
          <div className='search-bar-div'>
            <img src={searchIcon} alt="search icon" />
            <input type='search' placeholder='Search every thing' />
          </div>
        </div>
        <div className='nearby-address-container'>
          <div className='nearby-address-div'>
              <div className='icon-and-nearby-city'>
                <img src={NearStoreIcon} alt='near by' onClick={handleNearStorePopUp} />
                <NearStorePopUp isOpen={nearStorePopUp} handleCloseNearBy={handleCloseNearStoreModal} />
                <div className='near-by-city-time' onClick={handleNearStorePopUp}>
                  <p>Nearest Store</p>
                  <span>
                    <Link>E Venango - ST </Link><p> (Opens at 09:30 AM)</p>
                  </span>
                </div>
                <span className='deliver-to' onClick={handleSearchModal}>
                  <p>Deliver to</p>
                  <span>PA 19134</span>
                </span>
              </div>
          </div>
        </div>
        <div className='header-icons-container'>
          <Link>
          <img src={profileIcon} alt="profile" /> 
          </Link>
          <Link>
          <img src={HeartIcon} alt="heart" />
          </Link>
          <Link onClick={handleCartSectionOpen}>
            <img src={cartIcon} alt="cart" />
          </Link>
        </div>
      </div>

      {/* Tablate Haider */}
      <div className='tab-view-header'>
        <div className='tab-view-header-containt'>
          <div className='header-view-toggle-and-profile-div'>
              <img src={navToggler} alt="togle button" onClick={handleTabMenu} className='tab-view-humburger-icon' />
              <img src={profileIcon} alt="profile" />
          </div>
          <div className='tab-view-logo-and-searchbar'>
            <Link to={'/'}><img src={logo} alt='logo' /></Link>
            <div className='tab-view-searchbar-container'>
              <input type='search' placeholder="Search all things Bob's" />
              <img src={searchRed} alt="search" />
            </div>
          </div>
          <div className='tab-view-card-and-location'>
                <img src={locationIcon} alt="location" />
                <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>

      {/* Mobile View Header */}
      <div className='mobile-view-header'>
        <div className='mobile-view-logo-and-icon'>
          <div className='toggle-and-profile-div'>
              <img src={navToggler} alt="togle button" onClick={handleTabMenu} />
              <img src={profileIcon} alt="profile" className='mobile-view-profile-icon' />
          </div>
          <div className='mobile-view-logo-div'>
              <Link to={'/'}><img src={logo} alt='logo' /></Link>
          </div>
          <div className='mobile-view-card-and-location'>
              <img src={profileIcon} alt="profile" className='mobile-view-card-location-profile' />
              <img src={locationIcon} alt="location" className='movile-view-location' />
              <img src={cartIcon} alt="cart" />
          </div>
        </div>
        <div className='movile-view-search-bar-div'>
          <div className='movile-view-search-bar'>
            <input type='search' placeholder="Search all things Bob's" />
            <img src={searchRed} alt="search" />
          </div>
        </div>
      </div>
            {isTabMenuOpen ? <TabMenu isNavbarVisible={isTabMenuOpen} setIsNavbarVisible={setIsTabMenuOpen} navLinks={navLinks} /> : <Nav navLinks={navLinks} />}
            
            {/* Language Modal */}
            <LanguagePopUp 
              changeLanguage={changeLanguage} 
              setChangeLanguage={setChangeLanguage} 
              handleCLoseLanguageModal={handleCLoseLanguageModal}
              currentSelectedCountry={currentSelectedCountry}
              setCurrentSelectedCountry={setCurrentSelectedCountry}
              currentSelectedCountryFlag={currentSelectedCountryFlag}
              setCurrentSelectedCountryFlag={setCurrentSelectedCountryFlag}              
            />

            {/* Location Modal */}
            <LocationPopUp searchLocation={searchLocation} handleCloseSearch={handleCloseSearch} />
            <CartSidePannel
            cartData={cart}
              addToCartClicked={showCart}
              handleCartSectionClose={handleCartSectionClose}
              increamentQuantity={increamentQuantity}
              decreamentQuantity={decreamentQuantity}
              removeFromCart={removeFromCart}
            />
    </div>
  )
}

export default Haider