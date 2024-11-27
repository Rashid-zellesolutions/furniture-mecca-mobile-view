import React from 'react'
import './Comparision.css'
import ComparisionImage from '../../../Assets/Furniture Mecca/Comparision/comparision-img.jpg';
import mobCompair from '../../../Assets/Furniture Mecca/Comparision/download 120.png';
import compatetantImage from '../../../Assets/Furniture Mecca/Comparision/compatetant.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Comparision = () => {
  return (
    <div className='comparision-main-div'>
        <h3>Dare to Compare: FM's vs Leading National Brand</h3>
        <div className='comparision-img-div'>
            <LazyLoadImage src={ComparisionImage} alt='img' effect='blur' />
        </div>
        <div className='mobile-view-comparission'>
          <LazyLoadImage src={mobCompair} alt='img' effect='blur' />
        </div>
    </div>
  )
}

export default Comparision
