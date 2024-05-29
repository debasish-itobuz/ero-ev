import React from 'react'
import can from '../../images/solution/can.svg'

const Solutions = () => {
  return (
    <section className='row justify-content-center solution'>
          <div className=' col-12 col-md-6 row solution-data g-0 text-center text-md-start'>
            <div className='solution-data-img col-2 '>
              <img src={can} alt="can" height="100%" width="100%" />
            </div>
            <p className='solution-data-text col-9'>WE CREATE PORTABLE EV CHARGING SOLUTIONS.</p>
          </div>
          <div className='col-12 col-md-6 solution-details text-center text-md-start'>
            <p className='solution-details-para p-2 p-md-3 mb-1 mb-xl-2'>Our on-demand EV charging services make sure that EV owners remain free of worries.
              With only a few taps on your phone, you can get your EV charged anywhere.
              Yes. Anywhere!</p>
            <a href="#" className='solution-details-sub-para text-decoration-underline p-md-3'>See How We Do It</a>
          </div>
    </section>   
  )
}

export default Solutions