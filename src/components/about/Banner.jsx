import React from 'react'
import man from '../../images/about/banner/man.png'
import ero from '../../images/about/banner/ero.png'

export default function Banner() {
  return (
    <section className='row g-0 hero screenSize'>
      <div className='col-12 col-md-7 hero-content text-center text-md-start '>
        <h2 className='hero-content-heading'>We're Sparking the <span>EV</span> Revolution.</h2>
        <div className='hero-content-info' >
          <h4 className='hero-content-info-heading' >Ev revolution in <span>Kolkata.</span></h4>
          <p className='hero-content-info-text'>EroEV is a provider of EV charging solutions in Kolkata. Founded in 2022, We specialize in delivering convenient
            and flexible charging options for electric vehicle owners. Our mission is to accelerate the adoption of electric
            transportation by providing reliable, on-the-go charging infrastructure.</p>
        </div>
      </div>
      <div className='col-12 col-md-5 hero-img mx-auto me-xl-0 position-relative'>
        <img src={man} alt="man" height="100%" width='100%' />
        <div className='hero-img-logo position-absolute d-none d-lg-block translate-middle'>
          <img src={ero} alt="ero" height="100%" width='100%' />
        </div>
      </div>
    </section>
  )
}
