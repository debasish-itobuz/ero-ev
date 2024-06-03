import React from 'react'
import car from '../../images/about/vision/car.png'
import arrow from '../../images/about/vision/arrow.svg'

export default function Vision() {
    return (
        <section className='screenSize vision'>
            <h2 className='text-center vision-heading'>Our Vision.</h2>
            <div className=' row g-0 vision-content'>
                <div className='col-12 col-md-6 vision-content-img mx-auto mx-xl-0 position-relative'>
                    <img src={car} alt="car" height="100%" width='100%' />

                    <div className='vision-content-img-arrow d-flex justify-content-between align-items-center gap-5 p-3 px-lg-4 py-xl-4  position-absolute'>
                        <p className='m-0 p-0 py-md-1  py-xl-2 text-start vision-content-img-arrow-text text-decoration-underline text-nowrap text-white'>Get in touch.</p>
                        <img src={arrow} alt="arrow" height='45px' width="65px" />
                    </div>

                </div>
                <div className='col-12 col-md-6 vision-content-info text-center text-md-start'>
                    <h4 className='vision-content-info-heading'>At <span>EroEV,</span></h4>
                    <p className='vision-content-info-text'>our vision is to create a sustainable future powered by clean and efficient transportation.
                        We envision a world where electric vehicles are the norm, and our charging solutions play a
                        crucial role in enabling this transition. By providing convenient, reliable, and user-friendly
                        charging options, we aim to make electric vehicle ownership accessible and enjoyable for everyone.</p>
                </div>
            </div>
        </section>
    )
}
