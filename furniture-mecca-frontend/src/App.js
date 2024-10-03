import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './UI/Pages/Categories/Categories';
import Home from './UI/Pages/Home/Home';
import { IoIosArrowDropup } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import aarrowTop from './Assets/icons/arrow-up.png'
import { IoIosArrowUp } from "react-icons/io";


import livingRoomMainImage from './Assets/pages-main-images/Living-Room-Desk-1-1024x341.jpg';
import bedroomMainImage from './Assets/pages-main-images/Bedroom-Desk-1.jpg';
import diningRoomMainImage from './Assets/pages-main-images/Dining-Room-Desk-1 1.399203c025f09981256a.jpg';
import mattressesMainImage from './Assets/pages-main-images/Mattresses-Desk-1-1024x341.jpg';
import kidsMainImage from './Assets/pages-main-images/Kids-Room-Desk-1-1024x341.jpg';
import accentFurnitureMainImage from './Assets/pages-main-images/Accent-Furniture-Desk-1-1024x341.jpg';
import smallSpaceMainImage from './Assets/pages-main-images/Small-Space-Desk-1-1024x341.jpg';
import outletMainImage from './Assets/pages-main-images/Outlet-Desk-1-1024x341.jpg';
import tentSaleMainImage from './Assets/pages-main-images/Main-Banner-Desktop-1-1536x409.jpg'

import newArrivalImage from './Assets/category/new-arrival.png';
import livingRoomImage from './Assets/category/living-room.png';
import diningImage from './Assets/category/dining.png';
import bedroomImage from './Assets/category/badroom.png';
import outDoorImage from './Assets/category/out-door.png';
import recliningImage from './Assets/category/reclining.png';
import SectionaSofa from './Assets/to-be-change/sectional-sofa.png';
import Mattresses from './Assets/to-be-change/mattresses.png';
import HomeOffice from './Assets/to-be-change/home-office.png';
import KidsRoom from './Assets/to-be-change/kids-room.png';
import AreaRugs from './Assets/to-be-change/area-rugs.png';
import HomeDecor from './Assets/to-be-change/home-decor.png';
import Outlet from './Assets/to-be-change/outlet.png';
import Haider from './Global-Components/Header/Haider';
import Footer from './Global-Components/Footer/Footer';
import ProductArchive from './UI/Pages/ProductArchive/ProductArchive';
import SingleProduct from './UI/Pages/SingleProduct/SingleProduct';
import Shopvia from './UI/Components/ShopViaBanner/Shopvia';
import AddToCart from './UI/Pages/AddToCart/AddToCart';
import ContinueCart from './UI/Components/Cart-Components/Continue-cart/ContinueCart';
import { useEffect, useState } from 'react';
import Summery from './UI/Pages/Summery/Summery';
import PageNotFound from './UI/Pages/404Page/404Page';
import Cart from "./UI/Pages/Cart/Cart";
import Summary from "./UI/Pages/Summery/Summary";


function App() {
  const [currentUrl, setCurrentUrl] = useState('/');
  const location = useLocation();
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  const categoryCardData = [
    {title: "Dining Room Sets", img: newArrivalImage, link: '#'},
    {title: "Pub Height Dining Sets", img: livingRoomImage, link: '#'},
    {title: "Dining Table", img: diningImage, link: '#'},
    {title: "Dining Chairs & Banches", img: bedroomImage, link: '#'},
    {title: "Counter & Bar  Stools", img: outDoorImage, link: '#'},
    {title: "Server Buffets & China Cabinate", img: recliningImage, link: '#'},
    {title: "Small Space Dining", img: SectionaSofa, link: '#'},
    {title: "Dining Room Collections", img: Mattresses, link: '#'},
    {title: "Shop All Dining", img: HomeOffice, link: '#'},
    {title: "Dining Room Outlets", img: KidsRoom, link: '#'},
    {title: "Area Rugs", img: AreaRugs, link: '#'},
    {title: "Home Decor", img: HomeDecor, link: '#'},
    {title: "Outlet", img: Outlet, link: '#'},
  ]

  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if(scrollTop > 200){
      setIsVisible(true);
    }else{
      setIsVisible(false)
    }
  }

  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
      <div>
        <Haider />
        <Shopvia />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* Main Pages Routes */}
          <Route path='/dining-room-sets' element={<ProductArchive />} />
          <Route 
            path='/living-room' 
            element={<Categories categoriesMainImage={diningRoomMainImage} categoryCartTitle={'Living Room'} showPromotionsBaneers={false} categoryCardData={categoryCardData} />} 
          />
          <Route 
            path='/bedroom' 
            element={<Categories categoriesMainImage={bedroomMainImage} categoryCartTitle={'Bedroom Set'} showPromotionsBaneers={false} categoryCardData={categoryCardData} />} 
          />
          <Route 
            path='/dining-room' 
            element={<Categories categoriesMainImage={diningRoomMainImage} categoryCartTitle={'Dining Room'} showPromotionsBaneers={false} categoryCardData={categoryCardData} />} 
          />
          <Route 
            path='/mattresses' 
            element={<Categories categoriesMainImage={mattressesMainImage} categoryCartTitle={'Mattresses'} showPromotionsBaneers={false} categoryCardData={categoryCardData} />} 
          />
          <Route 
            path='/kids' 
            element={<Categories categoriesMainImage={kidsMainImage} showPromotionsBaneers={false} categoryCartTitle={'Kids Room'} categoryCardData={categoryCardData} />} 
          />
          <Route 
            path='/accent-furniture-and-rugs' 
            element={<Categories categoriesMainImage={accentFurnitureMainImage} showPromotionsBaneers={false} categoryCartTitle={'Accent Furniture And Rugs'} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/small-spaces' 
            element={<Categories categoriesMainImage={smallSpaceMainImage} categoryCartTitle={'Small Spaces'} showPromotionsBaneers={false} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/outlets' 
            element={<Categories categoriesMainImage={outletMainImage} showPromotionsBaneers={false} categoryCartTitle={'Outlets'} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/tent-sale' 
            element={<Categories categoriesMainImage={tentSaleMainImage} showBanners={false} categoryCartTitle={'Labor Day Sale'} categoryCardData={categoryCardData} newArrival={true} />} 
          />

          <Route path='/single-product/:slug' element={<SingleProduct  />} />
          {/* <Route path='/single-product' element={<SingleProduct  />} /> */}
          <Route path='/add-to-cart' element={<Cart />} />
          <Route path='/summery-page' element={<Summary />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer notLandingPage={currentUrl === '/' ? false : true} />
        <button onClick={handleClickTop} className={`scroll-to-top-button ${isVisible ? 'show-scrollTop' : ''}`}>
          <IoIosArrowUp size={30} className='lead-to-top-btn' />
        </button>
      </div>
  );
}

export default App;
