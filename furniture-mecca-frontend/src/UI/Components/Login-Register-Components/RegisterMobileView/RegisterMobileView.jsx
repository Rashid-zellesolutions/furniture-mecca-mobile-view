import React from 'react'
import './RegisterMobileView.css'

const RegisterMobileView = ({ mobileSignupClicked, handleRegisterView }) => {
    return (
        <div className={`mobile-register-main ${mobileSignupClicked ? 'slide-register-left' : ''}`}>
            <button onClick={handleRegisterView}>Click me</button>
        </div>
    )
}

export default RegisterMobileView
