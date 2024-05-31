import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from '../components/home/Hero'
import Solutions from '../components/home/Solutions'
import Drive from '../components/home/Drive'
import Charge from '../components/home/Charge'
import Partners from '../components/home/Partners'
import People from '../components/home/People'
import Customer from '../components/home/Customer'
import Hear from '../components/home/Hear'
import "../scss/_app.scss"

const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Drive />
      <Charge />
      <Partners />
      <People />
      <Customer />
      <Hear />
      <Footer />
    </>
  )
}

export default home
