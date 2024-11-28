import React, { useEffect, useState } from 'react'
import './SizeVariant.css';
import { url } from '../../../utils/api';
import { useVariation } from '../../../context/BreadCrumbContext/variationsContext';

const SizeVariant = ({ 
        attributes, 
        productData,
        selectedColor,
        selectVariation,
        handleSelectColor,
        handleSelectVariation
     }) => {


    const [colorVariation, setColorVariation] = useState();
    const [imageVariation, setImageVariaton] = useState(0);
    

    const handleColorVariation = (index) => {
        setColorVariation(index);
    }
    const [selectedImageName, setSelectedImageName] = useState()
    const handleImageVariation = (index, name) => {
        setImageVariaton(index)
        setSelectedImageName(name)
    }

    const [selectedColorName, setSelectedColorName] = useState()
    const handleclickColor = (value, name) => {
        handleSelectColor(value);
        setSelectedColorName(name)
    }
    const [selectedSelectAttr, setSelectedSelectAttr] = useState()
    const handleSelectClick = (value, name) => {
        handleSelectVariation(value)
        setSelectedSelectAttr(name)
    }


    return (

        <>
            {attributes?.map((attribute) => (
                <div className='attributes-types'>
                    {attribute.type === 'color' ? (
                        <div className='attribute-type'>
                            <h3 className='attribute-heading'>{selectedColorName ? selectedColorName : attribute.name}</h3>
                            <div className='attribute-variations'>
                                {attribute.options.map((option, index) => (
                                    <div className='attribute-single-color' >
                                        <div 
                                            className='attribute-color-variation-box'
                                            onClick={() => handleclickColor(option.value, option.name)} 
                                            style={{ 
                                                backgroundColor: option.value,
                                                border: selectedColor === option.value ? `1px solid ${option.value}` : 'none',
                                                boxShadow: selectedColor === option.value ? `inset 0 0 0 2px #FFFF` : ''
                                            }}
                                        ></div>
                                        {/* <p className='atribute-option-name'>{option.name}</p> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : attribute.type === 'image' ? (
                        <div className='attribute-type'>
                            <h3 className='attribute-heading'>{attribute.name}</h3>
                            <div className='attribute-variations'>
                                {attribute.options.map((option, index) => (
                                    <div className={`attribute-image-type `} onClick={() => handleImageVariation(index, option.name)}>
                                        <div className={`variation-image-div ${imageVariation === index ? 'active-selected-image-variation' : ''}`}>
                                            <img src={`${url}${option.value}`} alt={option.name} />
                                        </div>
                                        <p>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : attribute.type === 'select' ? (
                        <div className='attribute-type'>
                            <h3 className='attribute-heading'>{attribute.name}</h3>
                            <div className='attribute-variations' >
                                {attribute.options.map((option, index) => (
                                    <div className={`select-type-attribute ${selectVariation === option.value ? 'select-select-variation' : ''}`} onClick={() => handleSelectClick(option.value, option.name)}>
                                        <p>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : <></>
                    }
                </div>)
            )
            }
        </>

    )
}

export default SizeVariant
