import React from 'react'
import arrow from "../images/banner/arrow.svg"
import car from '../images/banner/car.png'
import explore from '../images/banner/explore.svg'
import { DiAndroid } from "react-icons/di";
import { IoLogoApple } from "react-icons/io";


const home = () => {
  return (
    <div>
      <div className='d-flex flex-column justify-content-center banner'>
        <h1 className='mx-auto banner-heading'>We Bring Charging Stations to You. </h1>
        <div className='banner-content text-center position-relative d-flex justify-content-center '>
          <div className='banner-content-img'>
            <img src={car} alt="car" />
          </div>
          <div className='banner-content-info p-4 px-5 position-absolute text-start'>
            <p className='banner-content-info-para'>A future with worry-free</p>
            <h3 className='banner-content-info-heading fw-bold my-4'>EV Charging!</h3>
            <p className='banner-content-info-sub-para fw-semibold '>Get the App</p>
            <img src={arrow} alt="arrow" />
          </div>
          <p className='position-absolute banner-content-text'>Wherever you are. We provide service.</p>
          <div className='banner-content-logo bg-black text-white py-3 px-5 d-flex align-items-center  gap-5 position-absolute'>
            <div className='d-flex flex-column align-items-center  banner-content-logo-details  gap-2'>
            <DiAndroid className='fs-1 banner-content-logo-details-icon'/>
              <p className='m-0 p-0 border-bottom'>For android</p>
            </div>
            <div className='d-flex flex-column align-items-center  banner-content-logo-details   gap-2'>
              <IoLogoApple className='fs-1 banner-content-logo-details-icon'/>
              <p className='m-0 p-0 border-bottom'>For ios</p>
            </div>
          </div>
          <div className='banner-content-arrow position-absolute text-white d-flex justify-content-between align-items-center gap-5 px-5 py-4'>
            <p className='m-0 p-0 text-decoration-underline w-25 text-start fs-5'>Explore more.</p>
              <img src={explore} alt="explore-arrow" height='59px' width="65px" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default home
