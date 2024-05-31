import React from 'react'
import facebook from '../images/footer/fb.svg'
import instagram from '../images/footer/instagram.svg'
import linkedIn from '../images/footer/in.svg'
import logo from '../images/footer/logo.png'
import ero from '../images/footer/ero.png'

const Footer = () => {
    return (
        <section className='row screenSize footer gap-3 gap-md-0'>
            <div className='col-12 col-md-6 col-lg-3 footer-info'>
                <div className='footer-info-logo text-center text-md-start' role='button'>
                    <img src={logo} alt="logo" height='29px' width='154px' />
                </div>
                <p className='footer-info-text text-center text-md-start'>our vision is to create a sustainable future powered by clean and efficient
                    transportation. We envision a world where electric vehicles</p>
                <div className='d-flex gap-2 flex-md-column footer-info-items justify-content-center  '>
                    <div className='footer-info-items-img d-flex justify-content-center  align-items-center '>
                        <img src={facebook} alt="fb" />
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='footer-info-items-img d-flex justify-content-center  align-items-center '>
                            <img src={instagram} alt="insta" />
                        </div>
                        <div className='footer-info-items-img d-flex justify-content-center  align-items-center '>
                            <img src={linkedIn} alt="in" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-content text-center text-md-start col-12 col-md-6 col-lg-3'>
                <h6 className='footer-content-heading'>Charge Anywhere, Anytime</h6>
                <h2 className='footer-content-main-heading fw-semibold '><span>Mobile charging</span> service.</h2>
                <a href="/" className='footer-content-link'>&#169; 2024 — Copyright All Rights reserved</a>
            </div>
            <div className='footer-links text-center text-md-start col-12 col-md-4 col-lg-2 d-flex flex-column gap-1'>
                <h6 className='footer-links-heading'>Links</h6>
                <div className='d-flex flex-column gap-1 gap-md-2 mt-2'>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms and conditions</a>
                </div>
            </div>
            <div className='footer-data text-center text-md-start col-12 col-md-4 col-lg-2 d-flex flex-column gap-2 gap-md-3 gap-lg-5'>
                <div className='footer-data-content'>
                    <h6 className='footer-data-content-heading'>Contact Us</h6>
                    <div className='d-flex flex-column gap-1 gap-md-2 mt-2'>
                        <a href="tel:+91 70443 27701" >+91 70443 27701</a>
                        <a href="mailto:sales@eroev.com" >sales@eroev.com</a>
                    </div>
                </div>
                <div>
                    <h6 className='footer-data-content-heading mt-xl-3'>Location</h6>
                    <p className='footer-data-content-text mt-2 mt-xl-3'>7th Floor, Monibhandar Building Webel Bhavan Premises, Sector5, Ring Rd,
                        Bidhannagar, West Bengal 700091</p>
                </div>
            </div>
            <div className='footer-img mx-auto d-flex justify-content-start align-items-start'>
                <img src={ero} alt="ero" height="100%" />
            </div>
        </section>
    )
}

export default Footer