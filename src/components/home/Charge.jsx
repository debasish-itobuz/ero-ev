import React from 'react'
import girl from '../../images/charge/girl.png'
import arrow from '../../images/charge/arrow.svg'
import scenery from '../../images/charge/scenery.png'

const Charge = () => {
    return (
        <div className='screenSize mt-2 mt-lg-4 charge p-2 p-md-3'>
            <h2 className='mb-3 charge-heading text-center '>Charge Anywhere, Anytime</h2>
            <div className='charge-content row '>
                <div className='charge-content-img col-12 col-md-6'>
                    <img src={girl} alt="girl" width="100%" height="100%" />
                </div>
                <div className='col-12 col-md-6 ps-md-5 pt-3 pt-md-5 position-relative charge-data '>
                <div className='charge-content-info'>
                    <p className='charge-content-info-text'>It's simple and easy.</p>
                    <p className='charge-content-info-sub-text'>Get the <span>EroEV App.</span></p>
                    <div className='charge-content-info-data d-flex gap-2 flex-column '> 
                        <div className='d-flex gap-2 align-items-center charge-content-info-data-link'>
                            <img src={arrow} alt="arrow" height="16px" width="18px" role='button'/>
                            <a href="#">Download the EroEV Application for Android or iOS.</a>
                        </div>
                        <div className='d-flex gap-2 align-items-center charge-content-info-data-link'> 
                            <img src={arrow} alt="arrow" height="16px" width="18px" role='button'/>
                            <a href="#">Create your profile.</a>
                        </div>
                        <div className='d-flex gap-2 align-items-center charge-content-info-data-link'>
                            <img src={arrow} alt="arrow" height="16px" width="18px" role='button'/>
                            <a href="#">Add your vehicle details.</a>
                        </div>
                    </div>
                </div>


                <div className='position-absolute charge-data-step'>
                    <p className='charge-data-step-text'>Up Next Step</p>
                    <img src={scenery} alt="scenery" height="256px" width="251px"/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Charge
