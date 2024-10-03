import React, {useState} from 'react'
import './FrequentlyBought.css';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../context/productsContext/productContext';

const FrequentlyBought = () => {
    // const productData = useSelector((state) => state.products.data)
    const {products} = useProducts()
    const navigate = useNavigate()
    const handleProductClicked = (item) => {
      navigate(`/single-product/${item.slug}`, {state: {products: item}})
    }
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hideFilters, setHideFilters] = useState(false);

    // console.log(productData)

    

   

    // Change image on hover function
    const handleImageHover = (index) => {
      setHoveredIndex(index);
    };
  
    const handleImageHoverLeave = () => {
      setHoveredIndex(null);
    };

    // Card title words limit
    const maxLength = 30;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    
    // Select Color Variations Functions
    const [selectedColorIndices, setSelectedColorIndices] = useState(Array(products.length).fill(0));
    const handleVariantImageClick = (cardIndex, colorIndex) => {
        const updatedIndices = [...selectedColorIndices];
        updatedIndices[cardIndex] = colorIndex;
        setSelectedColorIndices(updatedIndices);
    };

    const colorIndex = useSelector((state) => state.colorIndex.colorIndex)
  return (
    <div className='frequently-bought-main'>
        <h3>You may also like this...</h3>
        <div className='frequently-bought-card'>
        {products.slice(0, 5).map((item, index) => (
                        <ProductCard
                            key={index}
                            maxWidthAccordingToComp={'100%'}
                            tagIcon={item.productTag ? item.productTag : item.heart}
                            tagClass={` ${item.productTag ? 'tag-img' : 'heart-icon'}`}
                            tagDivClass={`${item.productTag ? 'product-tag-div' : 'heart-icon-div'}`}
                            mainImage={hoveredIndex === index && item.hoverImage ? item.hoverImage : item.mainImage}
                            productCardContainerClass={`product-card ${hideFilters ? 'card-width-increase' : ''}`}
                            mouseEnter={() => handleImageHover(index)}
                            mouseLeave={handleImageHoverLeave}
                            ProductTitle={truncateTitle(item.productTitle, maxLength)}
                            stars={item.ratingStars}
                            reviewCount={item.reviewCount}
                            lowPriceAddvertisement={item.lowPriceAddvertisement}
                            priceTag={item.priceTag}
                            financingAdd={item.financingAdd}
                            learnMore={item.learnMore}
                            colorVariation={item.colorVariation}
                            mainIndex={index}
                            deliveryTime={item.deliveryTime}
                            selectedColorIndices={selectedColorIndices}
                            handleVariantColor={() => handleVariantImageClick(index, colorIndex)}
                            borderLeft={index % 4 === 3}
                            handleCardClick={() => handleProductClicked(item)}
                            stock={item.stock}
                            singleProductData={item}
                        />
                    ))}
        </div>
    </div>
  )
}

export default FrequentlyBought
