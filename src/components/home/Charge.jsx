import React from 'react'
import girl from '../../images/charge/girl.png'
import arrow from '../../images/charge/arrow.svg'
import scenery from '../../images/charge/scenery.png'
import circle from '../../images/charge/circle.svg'
import Button from '../Button'

const Charge = () => {
    return (
        <div className='screenSize charge p-2 p-md-3 '>
            <h2 className='mb-3 mb-lg-5 charge-heading text-center'>Charge Anywhere, Anytime</h2>
            <div className='charge-content row m-0 p-0 '>
                <div className='charge-content-img col-12 col-md-6 position-relative '>
                    <div className='charge-content-img-girl'>
                        <img src={girl} alt="girl" width="100%" height="100%" />
                    </div>
                    <div className=' position-absolute charge-content-img-circle d-none d-lg-block'>
                        <div className='position-relative'>
                            <img src={circle} alt="circle" width="180px" height="180px" />
                            <span className='charge-content-img-circle-num position-absolute text-white'>01</span>
                        </div>
                    </div>
                    <Button title={"Next Step"} />
                </div>
                <div className='col-12 col-md-6 ps-md-5 pt-3 pt-md-0 pt-lg-5 position-relative charge-data'>
                    <div className='charge-content-info'>
                        <p className='charge-content-info-text'>It's simple and easy.</p>
                        <h4 className='charge-content-info-sub-text'>Get the <span>EroEV App.</span></h4>
                        <ul className='charge-content-info-data d-flex gap-2 flex-column m-0 p-0'>
                            <li className='d-flex gap-2 align-items-center charge-content-info-data-link'>
                                <img src={arrow} alt="arrow" height="16px" width="18px" role='button' />
                                <a href="#">Download the EroEV Application for Android or iOS.</a>
                            </li>
                            <li className='d-flex gap-2 align-items-center charge-content-info-data-link'>
                                <img src={arrow} alt="arrow" height="16px" width="18px" role='button' />
                                <a href="#">Create your profile.</a>
                            </li>
                            <li className='d-flex gap-2 align-items-center charge-content-info-data-link'>
                                <img src={arrow} alt="arrow" height="16px" width="18px" role='button' />
                                <a href="#">Add your vehicle details.</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-none d-md-block position-absolute charge-data-step'>
                        <p className='charge-data-step-text p-0 m-0 pb-1'>Up Next Step</p>
                        <img src={scenery} alt="scenery" height="160px" width="160px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charge