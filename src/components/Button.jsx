import React from 'react'
import step from '../images/home/charge/step.svg'

const Button = ({ title, customClasses, handleClick}) => {
    return (
        <button onClick={handleClick} className={`${customClasses}`}>
            <p className='hero-button-text p-0 m-0 text-decoration-underline '>{title}</p>
            <img src={step} alt="step" width="50px" height="46px" className='ms-3' />
        </button>
    )
}

export default Button
