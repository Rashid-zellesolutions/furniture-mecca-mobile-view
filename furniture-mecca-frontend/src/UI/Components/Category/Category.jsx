import React from 'react'
import './Category.css';
import CategoryCard from './CategoryCard/CategoryCard';
import livingRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/living-room 1.png';
import bedRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/catogary-bedroom 1.png';
import diningRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/dinning 1.png';
import mattresses from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Mattresses 1.png';
import sectionalSofa from '../../../Assets/Furniture Mecca/Landing Page/shop by category/sassnal-sofa 1.png';
import homeOffice from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Home-Office-1 1.png';
import homeDecor from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Home-Decior 1.png';
import rugs from '../../../Assets/Furniture Mecca/Landing Page/shop by category/rug 1.png';
import kidsRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/kids-room-1 1.png';
import accent from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Accent 1.png';
import recliningFurniture from '../../../Assets/Furniture Mecca/Landing Page/shop by category/recliner-1 1.png';
import outlet from '../../../Assets/Furniture Mecca/Landing Page/shop by category/catory-outlet 1.png';

// Mobile view items
import diningRoomSet from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Dining-Room-Sets-mobile.png';
import pubHeightSet from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Pub-Height-Dining-Sets-mobile.png';
import diningTable from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Dining-Tables-mobile.png';
import diningChairs from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Dining-Chairs-Beches-mobile.png';
import counterAndBars from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Counter-Bar-Stools-mobile.png';
import smallSpaces from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Small-space-Dining-Mobile.png';
import diningRoomCollection from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Dining-Rppm-Collection-mobile.png';
import shopAllDining from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Shop-All-Dining-Mobile.png';
import diningRoomOutlet from '../../../Assets/Furniture Mecca/category page/categories/mobile-view-images/Dining-Room-Outlet-mobile.png';

const Category = ({title, categoryData }) => {

  // console.log("category data : ", categoryData)
  const category = [
    {img: livingRoom, link: '/living-room'}, 
    {img: bedRoom, link: '/bedroom'},
    {img: diningRoom, link: '/dining-room'},
    {img: mattresses, link: '/mattresses'},
    {img: sectionalSofa, link: '#'},
    {img: homeOffice, link: '#'},
    {img: homeDecor, link: '#'},
    {img: rugs, link: '/accent-furniture-and-rugs'},
    {img: kidsRoom, link: '/kids'},
    {img: accent, link: '/accent-furniture-and-rugs'},
    {img: recliningFurniture, link: '#'},
    {img: outlet, link: '/outlets'},
  ]

  const mobileCategory = [
    {img: diningRoomSet, link: '/living-room'}, 
    {img: pubHeightSet, link: '/bedroom'},
    {img: diningTable, link: '/dining-room'},
    {img: diningChairs, link: '/mattresses'},
    {img: counterAndBars, link: '#'},
    {img: smallSpaces, link: '#'},
    {img: diningRoomCollection, link: '#'},
    {img: shopAllDining, link: '/accent-furniture-and-rugs'},
    {img: diningRoomOutlet, link: '/kids'},
  ]

  return (
    <div className='category-main-container'>
      <h3 className='category-heading'>{title}</h3>
        <div className='category-cards-container'>
          {category.map((item, index) => (
            <a key={index} href={item.link}>
              <img src={item.img} alt='img' />
            </a>
          ))}
        </div>
        <div className='mobile-category-cards-container'>
            {mobileCategory.map((items, index) => (
              <a key={index} href={items.link}>
                <img src={items.img} alt='img' />
              </a>
            ))}
        </div>
    </div>
  )
}

export default Category
