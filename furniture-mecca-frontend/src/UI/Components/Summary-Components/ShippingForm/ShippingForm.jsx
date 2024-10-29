import React, { useState } from 'react'
import './ShippingForm.css';
import SummaryInputFields from '../InputField/SummaryInputFields';

const ShippingForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxClick = () => { setIsChecked(!isChecked) }
    return (
        <>
            <form className='shipping-detail-form'>
                <div className='first-name-last-name'>
                    <SummaryInputFields type={'text'} label={'First Name'} fieldRequired={true} placeholder={'First Name'} />
                    <SummaryInputFields type={'text'} label={'Last Name'} fieldRequired={true} placeholder={'Last Name'} />
                </div>
                <div className='email-container'>
                    <SummaryInputFields type={'text'} label={'Email'} fieldRequired={true} placeholder={'Email'} />
                </div>
                <div className='country-region'>
                    <p>Country/ Region</p>
                    <h3>United States (USA)</h3>
                </div>
                <div className='shipping-address'>
                    <SummaryInputFields type={'text'} label={'Street Address'} fieldRequired={true} placeholder={'House number & Street number'} />
                    <SummaryInputFields type={'text'} placeholder={'Apartment, suite, unit etc'} />
                </div>
                <div className='city-state-zip'>
                    <SummaryInputFields type={'text'} label={'Zip Code'} fieldRequired={true} />
                    <SummaryInputFields type={'text'} label={'Town/City'} />
                    <SummaryInputFields type={'text'} label={'State'} fieldRequired={true} placeholder={'Pennsylvanian'} />
                </div>
                <div>
                    <SummaryInputFields type={'text'} label={'Phone'} fieldRequired={true} placeholder={'Phone'} />
                </div>
                <div className='different-billing-option'>
                    <div className='different-billing-checkox'>
                        <input type='checkbox' id='defferent-billing' onClick={handleCheckboxClick} />
                        <label for='defferent-billing'>Want to use defferent billing address</label>
                    </div>
                    <div className={`defferent-billing-option-true ${isChecked ? 'show-defferent-billing-option' : ''}`}>
                        <div className='first-name-last-name'>
                            <SummaryInputFields type={'text'} label={'First Name'} fieldRequired={true} placeholder={'First Name'} />
                            <SummaryInputFields type={'text'} label={'Last Name'} fieldRequired={true} placeholder={'Last Name'} />
                        </div>
                        <div className='country-region'>
                            <p>Country/ Region</p>
                            <h3>United States (USA)</h3>
                        </div>
                        <div className='shipping-address'>
                            <SummaryInputFields type={'text'} label={'Street Address'} fieldRequired={true} placeholder={'House number & Street number'} />
                            <SummaryInputFields type={'text'} placeholder={'Apartment, suite, unit etc'} />
                        </div>
                        <div className='city-state-zip'>
                            <SummaryInputFields type={'text'} label={'Zip Code'} fieldRequired={true} />
                            <SummaryInputFields type={'text'} label={'Town/City'} />
                            <SummaryInputFields type={'text'} label={'State'} fieldRequired={true} placeholder={'Pennsylvanian'} />
                        </div>
                    </div>
                </div>
                <div className='order-note'>
                    <SummaryInputFields type={'text'} label={'Order Notes (Optional)'} placeholder={'Notes about your order, e.g Special  delivery notes'} />
                </div>
            </form>
            <form className='mobile-view-shipping-details-form'>
                <div className='mobile-view-personal-details'>
                    <SummaryInputFields type={'text'} label={'First Name'} fieldRequired={true} placeholder={'First Name'} required={true} />
                    <SummaryInputFields type={'text'} label={'Last Name'} fieldRequired={true} placeholder={'Last Name'} required={true} />
                    <SummaryInputFields type={'text'} label={'Phone'} fieldRequired={true} placeholder={'Phone'} required={true} />
                    <SummaryInputFields type={'text'} label={'Email'} fieldRequired={true} placeholder={'Email'} required={true} />
                </div>
                <div className='mobile-delivery-details'>
                    <h3>Delivery Options</h3>
                    <SummaryInputFields type={'text'} label={'Address'} fieldRequired={true} placeholder={'Address'} required={true} />
                    <SummaryInputFields type={'text'} label={'Apt, Suite (Optional)'} fieldRequired={false} placeholder={'Apt, Suite'} required={true} />
                    <SummaryInputFields type={'text'} label={'Phone'} fieldRequired={true} placeholder={'Phone'} required={true} />
                    <SummaryInputFields type={'text'} label={'Email'} fieldRequired={true} placeholder={'Email'} required={true} />
                    <SummaryInputFields type={'text'} label={'City'} fieldRequired={true} placeholder={'City'} required={true} />
                    <div className='mobile-view-city-and-zip'>
                        <SummaryInputFields type={'text'} label={'Zip Code'} fieldRequired={true} placeholder={'Zip Code'} required={true} />
                        <SummaryInputFields type={'text'} label={'State'} placeholder={'State'} required={true} />
                    </div>
                </div>
                <div className='mobile-delivery-options-sections'>
                    <h3>Delivery Options:</h3>
                    <div className='mobile-delivery-option-details'>
                        <input type='radio' />
                        <div className='mobile-delivery-option-single-detail'>
                            <h3>White Glove : $199</h3>
                            <p>
                                Full delivery service to the room of your choice,
                                unpacking, assambling & trash removal.
                            </p>
                        </div>
                    </div>
                    <div className='mobile-delivery-option-details'>
                        <input type='radio' />
                        <div className='mobile-delivery-option-single-detail'>
                            <h3>Thrushhold: $149</h3>
                            <p>
                                Deliver inside the front door of your home. You do  the
                                unpacking & assambling.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mobile-pay-btn-section'>
                    <button>
                        Continue to Payment
                    </button>
                </div>
            </form>
        </>
    )
}

export default ShippingForm
