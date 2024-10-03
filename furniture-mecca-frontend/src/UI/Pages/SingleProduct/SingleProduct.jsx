import React, { useContext, useEffect, useState } from 'react'
import './SingleProduct.css'
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel'
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop'
import SingleProductStickySection from '../../Components/SingleProductStickySection/SingleProductStickySection'
import SimillerProducts from '../../Components/SimillerProducts/SimillerProducts'
import FrequentlyBought from '../../Components/FrequentlyBought/FrequentlyBought'
import RatingAndReview from '../../Components/RatingAndReview/RatingAndReview'
import CustomerPhotos from '../../Components/CustomerPhotos/CustomerPhotos'
import ProductComments from '../../Components/ProductComments/ProductComments'
import ShippingReturn from '../../Components/ShippingReturn/ShippingReturn'
import MoreToExplore from '../../Components/MoreToExplore/MoreToExplore'
import OutdoorFaves from '../../Components/OutdoorFaves/OutdoorFaves'
import ShipBanner from '../../Components/ShipBanner/ShipBanner'
import attentionBanner from '../../../Assets/images/attention-banner.png'
import { useLocation, useParams } from 'react-router-dom'
import InstaGallery from '../../Components/InstaGallery/InstaGallery'
import Shopvia from '../../Components/ShopViaBanner/Shopvia'
import { useDispatch } from 'react-redux'
import InstaTwoImageGallery from '../../Components/InstaTwoImageGallery/InstaTwoImageGallery'
import { useProducts } from '../../../context/productsContext/productContext'
import { useCart } from '../../../context/cartContext/cartContext'

const SingleProduct = () => {

  const {cart, addToCart, cartSectionOpen, setCartSectionOpen, increamentQuantity, decreamentQuantity, removeFromCart, calculateTotalPrice} = useCart();
  const [cartSection, setCartSection] = useState(false);
  const {slug} = useParams()
  const location = useLocation();
  const product = location.state.products || {}
  console.log("main product data", product)

  
  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    handleClickTop()
  }, [product]);
  
  if(!product){
    return <div>Product Not Found</div>
  }

  return (
    <div>
        <SingleProductStickySection productData={product} />
        <SimillerProducts />
        <FrequentlyBought />
        <RatingAndReview />
        {/* <CustomerPhotos /> */}
        <ProductComments />
        <OutdoorFaves />
    </div>
  )
}

export default SingleProduct

