import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/about/Banner'
import Vision from '../components/about/Vision'
import Team from '../components/about/Team'
import "../scss/_app.scss"

const About = () => {
  return (
    <>
    <Layout>
      <Banner/>
      <Vision/>
      <Team/>
    </Layout>
    </>
  )
}

export default About
