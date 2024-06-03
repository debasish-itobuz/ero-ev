import React from 'react'
import Cabs from './Cabs'
import triangle from '../../images/home/partner/triangle.svg'
import snape from '../../images/home/partner/snap.png'
import uber from '../../images/home/partner/uber.png'

const Partners = () => {
    const data = [{
        title: "Creating the change.",
        content: "a reliable eco-friendly public electric transport service.",
        triangle: triangle,
        logo: snape,
        width: window.screen.width > 767 ? "260px" : "160px",
        height: window.screen.width > 767 ? "100px" : "60px",
        className: ''
    },
    {
        title: "Affordable & sustainable rides.",
        content: "a multinational ride-hailing and transportation network company.",
        triangle: triangle,
        logo: uber,
        width: window.screen.width > 767 ? "186px" : "120px",
        height: window.screen.width > 767 ? "65px" : "40px",
        className: 'pb-0 mt-2'
    }
    ]
    return (
        <section className='row g-3 partner p-2 p-md-3 screenSize'>
            <div className='col-12 col-lg-4 partner-content ps-lg-4'>
                <h2 className='partner-content-heading mb-3 mb-lg-5 text-center text-md-start'>Our Partners.</h2>
                <p className='partner-content-para text-center text-md-start '>Partnering with the pioneers in sustainability</p>
                <p className='partner-content-sub-para text-center text-md-start '>We have teamed up with two of the most innovative names in the world of
                    eco-friendly transportation. We aim to collaborate with more such brands,
                    and create a seamless transportation service while maintaining the green balance
                    of the planet.</p>
            </div>
            <div className='row g-3 mx-auto col-lg-8 mt-0 '>
                {
                    data.map((item) =>
                        <Cabs key={item.title} imgClass={item.className} triangle={item.triangle} logo={item.logo} title={item.title} content={item.content} width={item.width} height={item.height} />
                    )
                }
            </div>
        </section>
    )
}

export default Partners