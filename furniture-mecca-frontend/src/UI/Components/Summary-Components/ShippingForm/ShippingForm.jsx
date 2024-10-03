import React, {useState} from 'react'
import './ShippingForm.css';
import SummaryInputFields from '../InputField/SummaryInputFields';

const ShippingForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxClick = () => {setIsChecked(!isChecked)}
  return (
    <form className='shipping-detail-form'>
            <div className='first-name-last-name'>
                <SummaryInputFields type={'text'} label={'First Name'} placeholder={'First Name'} />
                <SummaryInputFields type={'text'} label={'Last Name'} placeholder={'Last Name'} />
            </div>
            <div className='email-container'>
                <SummaryInputFields type={'text'} label={'Email'} placeholder={'Email'} />
            </div>
            <div className='country-region'>
                <p>Country/ Region</p>
                <h3>United States (USA)</h3>
            </div>
            <div className='shipping-address'>
                <SummaryInputFields type={'text'} label={'Street Address'} placeholder={'House number & Street number'} />
                <SummaryInputFields type={'text'} placeholder={'Apartment, suite, unit etc'} />
            </div>
            <div className='city-state-zip'>
                <SummaryInputFields type={'text'} label={'Zip Code'}  />
                <SummaryInputFields type={'text'} label={'Town/City'}  />
                <SummaryInputFields type={'text'} label={'State'} placeholder={'Pennsylvanian'}  />
            </div>
            <div>
                <SummaryInputFields type={'text'} label={'Phone'} placeholder={'Phone'} />
            </div>
            <div className='different-billing-option'>
                <div className='different-billing-checkox'>
                    <input type='checkbox' id='defferent-billing' onClick={handleCheckboxClick} />
                    <label for='defferent-billing'>Want to use defferent billing address</label>
                </div>
                <div className={`defferent-billing-option-true ${isChecked ? 'show-defferent-billing-option' : ''}`}>
                        <div className='first-name-last-name'>
                            <SummaryInputFields type={'text'} label={'First Name'} placeholder={'First Name'} />
                            <SummaryInputFields type={'text'} label={'Last Name'} placeholder={'Last Name'} />
                        </div>
                        <div className='country-region'>
                            <p>Country/ Region</p>
                            <h3>United States (USA)</h3>
                        </div>
                        <div className='shipping-address'>
                            <SummaryInputFields type={'text'} label={'Street Address'} placeholder={'House number & Street number'} />
                            <SummaryInputFields type={'text'} placeholder={'Apartment, suite, unit etc'} />
                        </div>
                        <div className='city-state-zip'>
                            <SummaryInputFields type={'text'} label={'Zip Code'}  />
                            <SummaryInputFields type={'text'} label={'Town/City'}  />
                            <SummaryInputFields type={'text'} label={'State'} placeholder={'Pennsylvanian'}  />
                        </div>
                </div>
            </div>
            <div className='order-note'>
                <SummaryInputFields type={'text'} label={'Order Notes (Optional)'} placeholder={'Notes about your order, e.g Special  delivery notes'} />
            </div>
        </form>
  )
}

export default ShippingForm
