import React from 'react';
import './ProductArchive.css';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
import FAQ from '../../Components/FAQ/FAQ';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import BreadCrumWithProduct from '../../Components/BreadCrumWithProduct/BreadCrumWithProduct';
import Products from '../../Components/Products/Products';
import underFifteen from '../../../Assets/Furniture Mecca/product archive page/breadcrums/under-1500.png';
import sofaAndLoveSeat from '../../../Assets/Furniture Mecca/product archive page/breadcrums/sofa-and-love-seat.png';
import sectionalSets from '../../../Assets/Furniture Mecca/product archive page/breadcrums/sectional-set.png'
import InstaGallery from '../../Components/InstaGallery/InstaGallery';
import RelatedCategories from '../../Components/Related-categories-Tags/RelatedCategories';
import InstaTwoImageGallery from '../../Components/InstaTwoImageGallery/InstaTwoImageGallery';

const ProductArchive = () => {
  // Breadcrup component data
  const breadcrumRecentData = [
    {img: underFifteen, title: 'Under $1500'},
    {img: sofaAndLoveSeat, title: 'Sofa & Love Seat Sets'},
    {img: sectionalSets, title: 'Sectional Sets'},
    {img: underFifteen, title: 'Under $1500'},
    {img: sofaAndLoveSeat, title: 'Sofa & Love Seat Sets'},
    {img: sectionalSets, title: 'Sectional Sets'},
    {img: underFifteen, title: 'Under $1500'},
    {img: sofaAndLoveSeat, title: 'Sofa & Love Seat Sets'},
    {img: sectionalSets, title: 'Sectional Sets'},
]

  return (
    <div>
        {/* <Shopvia /> */}
        <BreadCrumWithProduct breadcrumRecentData={breadcrumRecentData}  />
        <Products />
        <RelatedCategories />
        <FAQ />
        {/* <CategoriesGetScop isTrue={false} /> */}
        {/* <InstaGallery /> */}
        <InstaTwoImageGallery />
        {/* <CustomerServicePanel /> */}
    </div>
  )
}

export default ProductArchive
