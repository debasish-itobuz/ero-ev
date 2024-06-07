import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import Solutions from '../components/home/Solutions'
import Drive from '../components/home/Drive'
import Charge from '../components/home/Charge'
import Partners from '../components/home/Partners'
import People from '../components/home/People'
import Customer from '../components/home/Customer'
import Hear from '../components/Hear'
import "../scss/_app.scss"

const home = () => {
  return (
   
      <Layout>
        <Hero />
        <Solutions />
        <Drive />
        <Charge />
        <Partners />
        <People />
        <Customer />
        <Hear />
      </Layout>
   
  )
}

export default home