import React, { useEffect, useState } from 'react'
import './Categories.css';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import Category from '../../Components/Category/Category';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import NewArrival from '../../Components/NewArrivals/NewArrival';
// import MultiProductSlider from '../../Components/MultiProductSLider/MultiProductSlider';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
import BestSeller from '../../Components/BestSeller/BestSeller';
import DealOfDay from '../../Components/DealOfDay/DealOfDay';
import FinanceBannerSlider from '../../Components/FinanceBannerSlider/FinanceBannerSlider';
import BestSellerSlider from '../../Components/BestSellerSlider/BestSellerSlider';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import shipBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/AT FM.jpg'
import { useLocation } from 'react-router-dom';
import ScreenSizer from '../../../utils/ScreenResizer/ScreenResizer';

const Categories = ({categoriesMainImage, mobileViewMainImage, categoryCartTitle, categoryCardData, newArrival , showPromotionsBaneers}) => {
  
  const { width } = ScreenSizer();
  const isMobile = width < 481; 

  return (
    <div>
      {/* <Shopvia /> */}
      <LatestModulerBanner customWidth={false} showBanners={showPromotionsBaneers} mainImgShow={true} mobileMainImage={mobileViewMainImage} mainImage={categoriesMainImage} />
      <Category title={categoryCartTitle} categoryData={categoryCardData} />
      {/* {isMobile ? <BestSellerSlider /> : <BestSeller />} */}
      <BestSeller />
      {/* <DealOfDay /> */}
      <NewArrival /> 
      <ShipBanner bannerImg={shipBanner} showBanner={false} paddindTrue={false} />
      <CategoriesGetScop isTrue={true} />
      {/* <LatestModulerBanner customWidth={false} showBanners={true} paddingTop={true} mainImgShow={false} /> */}
      <FinanceBannerSlider />
      {/* <CustomerServicePanel /> */}
    </div>
  )
}

export default Categories
