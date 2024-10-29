import React from 'react'
import './SummaryInputFields.css';

const SummaryInputFields = ({label, type, placeholder, required, fieldRequired}) => {
  return (
    <div className='summary-input-field'>
        <label className={fieldRequired === true ? 'required-field' : ''}>{label}</label>
        <input type={type} placeholder={placeholder} required={required} />
    </div>
  )
}

export default SummaryInputFields
