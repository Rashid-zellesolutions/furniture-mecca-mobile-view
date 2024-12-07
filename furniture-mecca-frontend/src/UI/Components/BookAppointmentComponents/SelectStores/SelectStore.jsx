import React from 'react'
import './SelectStore.css'
import storeIcon from '../../../../Assets/icons/rounded-store.png';

const SelectStore = () => {

    // const storesData = [
    //     {img: storeIcon}
    // ]

  return (
    <div className='select-store-tab-main-container'>
      <h3 className='store-select-main-heading'>Select Store</h3>
      <div className='stores-list-container'>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>

        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
        <div className='single-store-card'>
            <img src={storeIcon} alt='store icon' className='single-store-card-img' />
            <p className='single-store-card-store-name'>101 E. Venango St.Philadelphia, PA 19134</p>
        </div>
      </div>
    </div>
  )
}

export default SelectStore
