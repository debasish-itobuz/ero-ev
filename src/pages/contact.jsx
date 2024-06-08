import React from 'react'
import Layout from '../components/Layout'
import Hear from '../components/Hear'
import "../scss/_app.scss"

export default function contact() {
  return (
    <>
    <Layout>
        <Hear requireBtn={false}/>
    </Layout>
    </>
  )
}
