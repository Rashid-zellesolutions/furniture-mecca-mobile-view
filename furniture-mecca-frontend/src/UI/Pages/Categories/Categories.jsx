import React from 'react'
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

const Categories = ({categoriesMainImage, categoryCartTitle, categoryCardData, newArrival , showPromotionsBaneers}) => {

  return (
    <div>
      {/* <Shopvia /> */}
      <LatestModulerBanner customWidth={false} showBanners={showPromotionsBaneers} mainImgShow={true} mainImage={categoriesMainImage} />
      <Category title={categoryCartTitle} categoryData={categoryCardData} />
      <BestSeller />
      {/* <DealOfDay /> */}
      <NewArrival /> 
      <CategoriesGetScop isTrue={true} />
      {/* <LatestModulerBanner customWidth={false} showBanners={true} paddingTop={true} mainImgShow={false} /> */}
      <FinanceBannerSlider />
      {/* <CustomerServicePanel /> */}
    </div>
  )
}

export default Categories
