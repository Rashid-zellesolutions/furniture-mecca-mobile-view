import React from 'react'
import './SummaryInputFields.css';

const SummaryInputFields = ({label, type, placeholder}) => {
  return (
    <div className='summary-input-field'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default SummaryInputFields
