import React from 'react'
import comma from '../../images/customer/comma.svg'
import man from '../../images/customer/man.png'
import arrow from '../../images/customer/arrow.svg'
import triangle from '../../images/customer/triangle.svg'

const Customer = () => {
    return (
        <div className='customer screenSize d-flex overflow-hidden position-relative'>
            <img src={triangle} alt="triangle" height="100%" className='position-absolute bottom-0 d-none d-md-block ' />
            <div className='customer-img d-none d-md-block '>
                <img src={comma} alt="comma" height="100%" />
            </div>
            <div className='customer-content d-flex w-100 flex-column gap-4 gap-md-5 '>
                <h2 className='customer-content-heading text-center text-md-start'>Words from Our Satisfied Customers.</h2>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center customer-content-info ' >
                    <div className='d-flex flex-column align-items-center align-items-md-start gap-2 customer-content-info-data'>
                        <div className='customer-content-info-data-img'>
                            <img src={man} alt="man" height='100%' />
                        </div>
                        <p className='p-0 m-0 fw-bold customer-content-info-data-title'>Pradyut Nandi</p>
                        <p className='p-0 m-0 customer-content-info-data-text'>Commercial Building Owner, Newtown</p>
                    </div>
                    <div className='customer-content-info-para d-flex flex-column align-items-center align-items-md-start w-100'>
                        <p className='customer-content-info-para-text text-center text-md-start'>EroEv, has help me in generating passive income from my extra parking space &amp;amp;
                            the unmanned process makes it easier for me. I can track my profits on the application
                            it self.</p>
                        <button className='d-flex align-items-center justify-content-center p-3 p-md-4 rounded-4 border-0 customer-content-info-para-button'>
                            <img src={arrow} alt="arrow" height='30px' width='33px' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
