import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/contact/Contact'
import Hear from '../components/Hear'
import "../scss/_app.scss"

export default function contact() {
  return (
    <>
    <Layout>
        <Contact/>
        <Hear requireBtn={false}/>
    </Layout>
    </>
  )
}
