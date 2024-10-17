import React, { useState } from 'react'
import './SizeVariant.css';

const SizeVariant = () => {
    const sizeNamesObj = ['King Bed', 'Queen Bed', 'Twin Bed', 'Full Bed']
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [variantName, setVariationName] = useState(sizeNamesObj[0])
    const handleSizeSelect = (index) => {
        setSelectedVariantIndex(index);
    }
  return (
    <div className='size-variant-main-container'>
        <div className='show-selected-size-section'>
            <p>Selected Size: </p>
            <h3>{variantName}</h3>
        </div>
        <div className='size-variant-boxes-section'>
            {sizeNamesObj.map((item, index) => (
                <button 
                    className={`size-variant-button ${selectedVariantIndex === index ? 'set-selected-size' : ''}`}
                    onClick={() => {handleSizeSelect(index); setVariationName(item)}}
                >
                    {item}
                </button>
            ))}
        </div>
    </div>
  )
}

export default SizeVariant
