import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/faq/Banner'
import Questions from '../components/faq/Questions'
import Hear from '../components/Hear'
import "../scss/_app.scss"

export default function faq() {
  return (
    <>
    <Layout>
        <Banner/>
        <Questions/>
        <Hear/>
    </Layout>
    </>
  )
}