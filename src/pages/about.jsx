import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/about/Banner'
import Vision from '../components/about/Vision'
import "../scss/_app.scss"

const About = () => {
  return (
    <>
    <Layout>
      <Banner/>
      <Vision/>
    </Layout>
    </>
  )
}

export default About
