import React from 'react'
import phone from '../../images/contact/call.svg'
import mail from '../../images/contact/mail.svg'
import map from '../../images/contact/location.svg'
import triangle from '../../images/contact/triangle.svg'
import Button from '../Button'

export default function Contact() {
    return (
        <section className='screenSize message'>
            <h2 className='message-heading text-center text-md-start'>If you'd like to get in touch, please send us <span>a message!</span></h2>
            <div className='row message-content g-0 gap-2 gap-md-0'>
                <div className='col-12 col-md-5 message-content-info position-relative'>
                    <h4 className='message-content-info-heading'>Contact information.</h4>
                    <p className='message-content-info-text'>Any question or remarks? Just write us a message!</p>

                    <div className=' message-content-info-img position-absolute d-none d-xl-block end-0 bottom-0'>
                        <img src={triangle} alt="triangle" height="100px" width="150px" />
                    </div>

                    <div className='d-flex flex-column gap-1 gap-md-2 gap-xl-4 mt-2  message-content-info-details '>
                        <div className='d-flex gap-2 gap-lg-4'>
                            <img src={phone} alt="phone" />
                            <a href="tel:+91 70443 27701" className='message-content-info-details-text'>+91 70443 27701</a>
                        </div>

                        <div className='d-flex gap-2 gap-lg-4'>
                            <img src={mail} alt="mail" />
                            <a href="mailto:sales@eroev.com" className='message-content-info-details-text' >sales@eroev.com</a>
                        </div>

                        <div className='d-flex gap-2 gap-lg-4  align-items-start message-content-info-details-address'>
                            <img src={map} alt="map" />
                            <p className='message-content-info-details-text'>7th Floor, Monibhandar Building Webel Bhavan Premises, Sector5, Ring Rd,
                                Bidhannagar, West Bengal 700091</p>
                        </div>

                    </div>
                </div>
                <div className='col-12 col-md-7 ps-md-2 ps-xl-5'>
                    <form className='row bg-white message-content-form mx-auto gap-2 gap-lg-0 h-100 w-100'>
                        <div className='d-flex flex-column col-12 col-md-6 message-content-form-box mb-1 mb-lg-2'>
                            <label htmlFor="">First Name</label>
                            <input type="text" className='border border-0 border-bottom message-content-form-input ' />
                        </div>

                        <div className='d-flex flex-column col-12 col-md-6 message-content-form-box mb-1 mb-lg-2'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className='border border-0 border-bottom message-content-form-input' />
                        </div>

                        <div className='d-flex flex-column col-12 col-md-6 message-content-form-box mb-1 mb-lg-2'>
                            <label htmlFor="">Email</label>
                            <input type="email" className='border border-0 border-bottom message-content-form-input' />
                        </div>

                        <div className='d-flex flex-column col-12 col-md-6 message-content-form-box mb-1 mb-lg-2 '>
                            <label htmlFor="">Phone Number</label>
                            <input type="number" className='border border-0 border-bottom message-content-form-input' />
                        </div>

                        <div className='d-flex flex-column col-12 '>
                            <label htmlFor="">Message</label>
                            <textarea type="text" placeholder='Write your message..' className='border border-0 border-bottom message-content-form-input' />
                        </div>

                        <div className='d-flex justify-content-center justify-content-md-end mt-3 '>
                            <Button title={"Let's connect"} customClasses=' d-flex flex-row align-items-center w-fit message-content-form-button z-3 border-0' />
                        </div>
                    </form>
                </div>


            </div>

        </section>
    )
}