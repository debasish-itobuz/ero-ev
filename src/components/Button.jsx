import React from 'react'
import step from '../images/charge/step.svg'

const Button = ({ title }) => {
    return (
        <button className='d-flex flex-row align-items-center w-fit position-absolute hero-button z-1 border-0 ' role="button">
            <p className='hero-button-text p-0 m-0 text-decoration-underline '>{title}</p>
            <img src={step} alt="step" width="50px" height="46px" className='ms-3' />
        </button>
    )
}

export default Button
