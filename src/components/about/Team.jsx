import React, { useState, useEffect } from 'react'
import Button from '../Button'
import pradyut from '../../images/about/team/pradyut.png'
import anuradha from '../../images/about/team/anuradha.png'
import facebook from '../../images/about/team/fb.svg'
import instagram from '../../images/about/team/instagram.svg'
import linkedIn from '../../images/about/team/in.svg'

const data = [{
    name: 'Selina Dasgupta',
    img: anuradha,
    post: 'Cheif EV Engineer.',
    details: 'We specialize in delivering convenient and flexible charging options for electric vehicle owners. Our mission is to accelerate the adoption of electric transportation by providing reliable, on-the-go charging infrastructure.'
},
{
    name: 'Pradyut Nandi',
    img: pradyut,
    post: 'Commercial ev Engineer.',
    details: 'We specialize in delivering convenient and flexible charging options for electric vehicle owners. Our mission is to accelerate the adoption of electric transportation by providing reliable, on-the-go charging infrastructure.'

},
{
    name: 'Anuradha Maiti',
    img: anuradha,
    post: 'Commercial ev Engineer.',
    details: 'We specialize in delivering convenient and flexible charging options for electric vehicle owners. Our mission is to accelerate the adoption of electric transportation by providing reliable, on-the-go charging infrastructure.'

},
{
    name: 'Arun Dey',
    img: pradyut,
    post: 'Commercial Engineer.',
    details: 'We specialize in delivering convenient and flexible charging options for electric vehicle owners. Our mission is to accelerate the adoption of electric transportation by providing reliable, on-the-go charging infrastructure.'

},
]

export default function Team() {
    let teamCarousel;

    const [count, setCount] = useState(1);
    const [current, setCurrent] = useState(0);

    function handleTeam() {
        let width = window.screen.width >= 1900 ? 32.5 : window.screen.width >= 1600 ? 31 : window.screen.width >= 1440 ? 34.5 : window.screen.width >= 1024 ? 40.2 : window.screen.width >= 768 ? 54 : 113;

        teamCarousel.style.transform = `translateX(-${count * width}%)`;
        if (count >= 3) setCount(0);
        else
            setCount(count + 1);

        setCurrent((prev) => {
            if (prev >= 3) return 0;
            else return prev + 1;
        });
    }

    useEffect(() => {
        teamCarousel = document.getElementById("team-carousel")
    }, [count])

    return (
        <section className="team screenSize p-2 p-md-3 ">
            <div className="team-content d-flex flex-column-reverse flex-md-row  gap-3 align-items-end justify-content-between">
                <p className="team-content-para text-center text-md-start m-0">
                    Founded in  <span>2022.</span>
                </p>
                <h2 className="team-content-heading text-center text-md-start ">
                    Our hard-working team.</h2>
            </div>
            <div className='d-flex team-info position-relative'>
                <div class="team-wrapper position-relative">
                    <div class="team-carousel" id='team-carousel'>
                        {data.map((item, index) => {
                            return <div key={item.name} className='team-info-items p-3 text-center text-md-start'>
                                <div className='team-info-items-img'>
                                    <img src={item.img} alt={item.name} height='100%' width="100%" />
                                </div>
                                <h5 className='fw-semibold team-info-items-title '>{item.name}</h5>
                                <p className='p-0 m-0 team-info-items-text'>{item.post}</p>

                                <div className={`${current === index ? "d-md-block" : "d-none"} d-none team-info-items-details p-3 p-xl-5`}>
                                    <h5 className='fw-semibold team-info-items-title mb-3'>{item.name}</h5>
                                    <p className='p-0 mb-5 '>{item.post}</p>
                                    <p className='p-0 mb-4 team-info-items-para'>{item.details}</p>

                                    <div className='d-flex gap-2 footer-info-items justify-content-start mb-3'>
                                        <div className='footer-info-items-img d-flex justify-content-center  align-items-center '>
                                            <img src={facebook} alt="fb" />
                                        </div>
                                        <div className='footer-info-items-img d-flex justify-content-center  align-items-center '>
                                            <img src={instagram} alt="instagram" />
                                        </div>
                                        <div className='footer-info-items-img d-flex justify-content-center  align-items-center '>
                                            <img src={linkedIn} alt="in" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <Button title={"Next"} handleClick={handleTeam} customClasses={"d-flex flex-row align-items-center w-fit team-button z-3 border-0 position-absolute end-50"} />
            </div>
        </section>
    )
}