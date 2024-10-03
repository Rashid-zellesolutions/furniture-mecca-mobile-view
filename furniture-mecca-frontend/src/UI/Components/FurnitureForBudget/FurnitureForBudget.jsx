import React from 'react'
import './FurnitureForBudget.css'
import sofaUnder from '../../../Assets/Furniture Mecca/Landing Page/furniture-for-budget/sofa-under.png'
import bedUnder from '../../../Assets/Furniture Mecca/Landing Page/furniture-for-budget/bed-under.png'
import storageUnder from '../../../Assets/Furniture Mecca/Landing Page/furniture-for-budget/storage-under.png'

const FurnitureForBudget = () => {
    const budgetCardData = [
        {img: sofaUnder, sale: 'Sofa Under $200', shopNow: 'Shop now'},
        {img: bedUnder, sale: 'Sofa Under $200', shopNow: 'Shop now'},
        {img: storageUnder, sale: 'Sofa Under $200', shopNow: 'Shop now'},
    ]
  return (
    <div className='furniture-for-budget-main-secton'>
        <div className='furniture-for-budget-heading-section'>
            <h3>Furniture For Every Budget</h3>
            <p>From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.</p>
        </div>
        <div className='furniture-for-budget-card'>
            {budgetCardData.map((items, index) => (
                <div key={index} className='budget-furniturre-card'>
                    <div className='budget-furniture-card-img'>
                        <img src={items.img} alt='img' />
                    </div>
                    <div className='budget-furniture-card-details'>
                        <p>{items.sale}</p>
                        <button>
                            {items.shopNow}
                            <div className='shop-now-btn-under-line'></div>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FurnitureForBudget
