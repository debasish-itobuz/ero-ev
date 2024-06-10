import React from 'react'
import Button from './Button'
import man from '../images/home/hear/man.png'


const Hear = ({ requireBtn = true }) => {
    return (
        <section className="hear screenSize p-2 p-md-3 overflow-hidden position-relative ">
            <div className="hear-content d-flex flex-column-reverse flex-md-row  gap-3 align-items-end justify-content-between">
                <p className="hear-content-para text-center text-md-start m-0">
                    Our vision is to create a <span>sustainable future.</span>
                </p>
                <h2 className="hear-content-heading text-center text-md-start ">
                    We'd Love to Hear From You!
                </h2>
            </div>

            <div className='hear-info row'>
                <div className='hear-info-img col-12 col-md-6 mb-2 position-relative '>
                    <img src={man} alt="man" height='100%' width='100%' />
                </div>
                <p className='hear-info-text p-1 p-md-0 text-center text-md-start col-12 col-md-6 '>
                    We're committed to providing the best possible service, and your input helps us
                    achieve that goal. Thank you for taking the time to connect with us!
                </p>
            </div>
            <Button title={"Let's Talk"} customClasses={`${requireBtn ? "" : "d-none"} d-flex flex-row align-items-center w-fit hear-info-button z-3 border-0 position-absolute end-50`} />

        </section>
    )
}

export default Hear