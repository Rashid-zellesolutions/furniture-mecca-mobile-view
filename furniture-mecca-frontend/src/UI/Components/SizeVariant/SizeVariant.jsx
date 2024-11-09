import React, { useState } from 'react'
import './SizeVariant.css';
import { url } from '../../../utils/api';

const SizeVariant = ({ attributes }) => {
    const sizeNamesObj = ['King Bed', 'Queen Bed', 'Twin Bed', 'Full Bed']
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [variantName, setVariationName] = useState(sizeNamesObj[0])
    const handleSizeSelect = (index) => {
        setSelectedVariantIndex(index);
    }
    console.log("attributes", attributes)
    return (
        <div className='size-variant-main-container'>
            {attributes && attributes.map((attribute) => (
                <div className='attributes-types'>
                    {attribute.type === 'color' ?
                        <div className='attribute-type'>
                            <h3 className='attribute-heading'>{attribute.name}</h3>
                            <div className='attribute-variations'>
                                {attribute.options.map((option) => (
                                    <div className='attribute-single-color'>
                                        <div className='attribute-color-variation-box' style={{ backgroundColor: option.value }}></div>
                                        <p className='atribute-option-name'>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div> :
                    attribute.type === 'image' ?
                        <div className='attribute-type'>
                            <h3 className='attribute-heading'>{attribute.name}</h3>
                            <div className='attribute-variations'>
                                {attribute.options.map((option) => (
                                    <div className='attribute-image-type'>
                                        <img src={`${url}${option.value}`} alt={option.name} />
                                        <p>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div> :
                    attribute.type === 'select' ?
                        <div className='attribute-type'>
                            <h3 className='attribute-heading'>{attribute.name}</h3>
                            <div className='attribute-variations'>
                                {attribute.options.map((option) => (
                                    <div className='select-type-attribute'>
                                        <p>{option.name}</p>
                                    </div>    
                                ))}
                            </div>
                        </div> :
                    <></>
                    }
                </div>
            ))}
            {/* <div className='show-selected-size-section'>
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
        </div> */}
        </div>
    )
}

export default SizeVariant
