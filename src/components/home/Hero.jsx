import React from 'react'
import arrow from "../../images/banner/arrow.svg"
import car from '../../images/banner/car.png'
import explore from '../../images/banner/explore.svg'
import { DiAndroid } from "react-icons/di";
import { IoLogoApple } from "react-icons/io";
import can from '../../images/banner/can.svg'

const Hero = () => {
  return (
    <div className='screenSize'>
      <div className='d-flex flex-column justify-content-center banner mt-5'>
        <h1 className='mx-auto banner-heading mt-3'>We Bring Charging Stations to You. </h1>
        <div className='banner-content text-center position-relative d-flex flex-column flex-lg-row justify-content-center '>
          <div className='banner-content-img'>
            <img src={car} alt="car" />
          </div>
          <p className='banner-content-text'>Wherever you are. We provide service.</p>
          <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-5 mt-3 mt-md-4'>
            <div className='banner-content-info text-start'>
              <p className='banner-content-info-para p-0 p-md-2 '>A future with worry-free</p>
              <h3 className='banner-content-info-heading p-0 p-md-2  m-1 fw-bold'>EV Charging!</h3>
              <p className='banner-content-info-sub-para p-0 p-md-2  m-1 fw-semibold '>Get the App</p>
              <img src={arrow} alt="arrow" className='banner-content-info-sub-para-img' role="button" />
            </div>
            <div className='banner-content-logo bg-black text-white py-3 px-4 d-flex align-items-center'>
              <div className='d-flex flex-column align-items-center banner-content-logo-details gap-2' role="button">
                <DiAndroid className='fs-1 banner-content-logo-details-icon' />
                <p className='m-0 p-0 banner-content-logo-details-text text-nowrap '>For android</p>
              </div>
              <div className='d-flex flex-column align-items-center banner-content-logo-details gap-2' role="button">
                <IoLogoApple className='fs-1 banner-content-logo-details-icon' />
                <p className='m-0 p-0 banner-content-logo-details-text text-nowrap'>For ios</p>
              </div>
            </div>
            <div className='banner-content-arrow d-flex justify-content-between align-items-center gap-5 px-5 py-4'>
              <p className='m-0 p-0 text-start fs-5 banner-content-arrow-text' role="button">Explore more.</p>
              <img src={explore} alt="explore-arrow" height='59px' width="65px" role="button" />
            </div>
          </div>
        </div>
        <div className='row justify-content-around banner-info p-3'>
          <div className=' col-12 col-md-6 p-1 p-md-3 d-flex gap-3 gap-md-5 align-items-center  banner-info-data'>
            <div className='banner-info-data-img'>
              <img src={can} alt="can" height="120px" width="113px" />
            </div>
            <p className='banner-info-data-text'>WE CREATE PORTABLE EV CHARGING SOLUTIONS.</p>
          </div>
          <div className='col-12 col-md-6 p-1 p-md-3 banner-info-details'>
            <p className='banner-info-details-para p-0 mb-1'>Our on-demand EV charging services make sure that EV owners remain free of worries.
              With only a few taps on your phone, you can get your EV charged anywhere.
              Yes. Anywhere!</p>
            <a href="#" className='banner-info-details-sub-para'>See How We Do It</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero