import React from 'react'
import './MobileCart.css';
import deleteIcon from '../../../../Assets/icons/delete-red.png';
import plusBtn from '../../../../Assets/icons/plus.png';
import minusBtn from '../../../../Assets/icons/minus.png';

const MobileCart = (
    {
        productName,
        productImg,
        productColor,
        productAccesories,
        productSinglePrice,
        productQuantity,
        productsTotalPrice,
        handleRomoveProduct,
        handleIncreament,
        handleDecreament,
        cartIndex,
    }) => {

        const productTotalPrice = productSinglePrice * productQuantity;
        const singlePrice = productSinglePrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        }); 
        const formatedProductTotalPrice = productTotalPrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

    return (
        <div className='mobile-cart'>
            <button className='mobile-delete-product' onClick={() => handleRomoveProduct(cartIndex)}>
                <img src={deleteIcon} alt='delete icon' />
            </button>
            <h3 className='mobile-priduct-name'>{productName}</h3>
            <div className='mobile-cart-product-image-and-containt'>
                <img src={productImg} alt='product-image' className='mobile-cart-product-main-image' />
                <div className='mobile-cart-product-containt'>
                    <p>{productColor}</p>
                    <p>{productAccesories}</p>
                    <p>{singlePrice}</p>
                    <div className='mobile-cart-product-count-and-total-price'>
                        <div className='mobile-cart-product-count'>
                            <button onClick={handleDecreament}>
                                <img src={minusBtn} alt='minus' />
                            </button>
                            <p>{productQuantity}</p>
                            <button onClick={handleIncreament}>
                                <img src={plusBtn} alt='plus-btn' />
                            </button>
                        </div>
                        <p>{formatedProductTotalPrice}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobileCart
