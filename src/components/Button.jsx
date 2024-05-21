import React from 'react'
import step from '../images/charge/step.svg'

const Button = ({ title }) => {
    return (
        <div className='d-flex flex-row align-items-center w-fit px-1 px-md-4 position-absolute hero-button z-1' role="button">
            {title}
            <img src={step} alt="step" width="50px" height="56px" className='ms-3' />
        </div>
    )
}

export default Button
