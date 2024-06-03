import React, { useEffect } from 'react'
import comma from '../../images/home/customer/comma.svg'
import man from '../../images/home/customer/man.png'
import arrow from '../../images/home/customer/arrow.svg'
import triangle from '../../images/home/customer/triangle.svg'

const Customer = () => {

    let carouselCount = 0;
    let customerCarousel;
    function handleCarousel() {
        if (carouselCount >= 2) carouselCount = -1;
        customerCarousel.style.transform = `translateX(-${++carouselCount * 100}%)`;
    }
    useEffect(()=>{
        customerCarousel = document.getElementById("customer-carousel")
    },[])

    return (
        <section className='customer screenSize d-flex overflow-hidden position-relative'>
            <img src={triangle} alt="triangle" height="100%" className='position-absolute d-none d-md-block ' />
            <div className='customer-img d-none d-md-block '>
                <img src={comma} alt="comma" height="100%" />
            </div>
            <div className='customer-content d-flex flex-column position-relative'>
                <h2 className='customer-content-heading text-center text-md-start'>Words from Our Satisfied Customers.</h2>
                <div className='customer-wrapper z-2 overflow-hidden position-relative'>
                    <div className='d-flex customer-carousel' id="customer-carousel">
                        
                        <div className='d-flex flex-column flex-md-row justify-content-center align-item-start customer-content-info flex-shrink-0 w-100' >
                            <div className='d-flex flex-column align-items-center align-items-md-start gap-2 customer-content-info-data'>
                                <div className='customer-content-info-data-img'>
                                    <img src={man} alt="man" height='100%' />
                                </div>
                                <p className='p-0 m-0 mt-xl-4 fw-bold customer-content-info-data-title'>Pradyut Nandi</p>
                                <p className='p-0 m-0 mt-xl-1 customer-content-info-data-text'>Commercial Building Owner, Newtown</p>
                            </div>
                            <div className='customer-content-info-para  w-100'>
                                <p className='customer-content-info-para-text text-center text-md-start p-0 m-0'>EroEv, has help me in generating passive income from my extra parking space &amp;amp;
                                    the unmanned process makes it easier for me. I can track my profits on the application
                                    it self.</p>

                            </div>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-center align-item-start customer-content-info flex-shrink-0 w-100' >
                            <div className='d-flex flex-column align-items-center align-items-md-start gap-2 customer-content-info-data'>
                                <div className='customer-content-info-data-img'>
                                    <img src={man} alt="man" height='100%' />
                                </div>
                                <p className='p-0 m-0 mt-xl-4 fw-bold customer-content-info-data-title'>Pradyut Dey</p>
                                <p className='p-0 m-0  mt-xl-1 customer-content-info-data-text'>Commercial Building Owner, Newtown</p>
                            </div>
                            <div className='customer-content-info-para  w-100'>
                                <p className='customer-content-info-para-text text-center text-md-start p-0 m-0'>EroEv, has help me in generating passive income from my extra parking space &amp;amp;
                                    the unmanned process makes it easier for me. I can track my profits on the application
                                    it self.</p>

                            </div>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-center align-item-start customer-content-info flex-shrink-0 w-100' >
                            <div className='d-flex flex-column align-items-center align-items-md-start gap-2 customer-content-info-data'>
                                <div className='customer-content-info-data-img'>
                                    <img src={man} alt="man" height='100%' />
                                </div>
                                <p className='p-0 m-0 mt-xl-4 fw-bold customer-content-info-data-title'>Pradyut Ghosh</p>
                                <p className='p-0 m-0 mt-xl-1 customer-content-info-data-text'>Commercial Building Owner, Newtown</p>
                            </div>
                            <div className='customer-content-info-para  w-100'>
                                <p className='customer-content-info-para-text text-center text-md-start p-0 m-0'>EroEv, has help me in generating passive income from my extra parking space &amp;amp;
                                    the unmanned process makes it easier for me. I can track my profits on the application
                                    it self.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <button className='d-flex align-items-center justify-content-center p-3 p-md-4 rounded-4 border-0 customer-content-info-para-button position-absolute z-3' onClick={handleCarousel}>
                    <img src={arrow} alt="arrow" height='30px' width='33px' />
                </button>
            </div>
        </section>
    )
}

export default Customer
