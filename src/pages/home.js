import React from 'react'
import Navbar from '../components/Navbar'
import arrow from "../images/banner/arrow.svg"

const home = () => {
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-column justify-content-center'>
        <h1 className='w-25 mx-auto display-5'>We Bring Charging Stations to You. </h1>
        <div className='banner text-center position-relative'>
          <div className='banner-content p-4 position-absolute text-start'>
            <p className='banner-content-para w-75 '>A future with worry-free</p>
            <h3 className='banner-content-heading w-25 fw-bold my-4'>EV Charging!</h3>
            <p className='banner-content-sub-para fw-semibold '>Get the App</p>
            <img src={arrow} alt="arrow" />
          </div>
          <p className='position-absolute banner-text'>Wherever you are. We provide service.</p>
        </div>
      </div>

    </div>
  )
}

export default home
