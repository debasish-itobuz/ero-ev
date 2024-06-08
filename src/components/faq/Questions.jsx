import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import triangle from '../../images/faq/questions/triangle.svg'

export default function Questions() {
  return (
    <section className='screenSize question d-flex flex-column flex-md-row'>
      <div className='question-content'>
        <div className='question-content-info'>
          <div className='d-flex justify-content-end question-content-info-img'>
            <img src={triangle} alt="triangle" height="100px" width="150px" />
          </div>
          <p className='question-content-info-text '>Your EV Charging</p>
          <h2 className='question-content-info-heading '>Questions, Answered.</h2>
        </div>

        <p className='question-content-text text-center text-md-start'>
          Our vision is to create a sustainable future powered by clean and efficient transportation. We envision
          a world where electric vehicles are the norm, and our charging solutions play a crucial role
          in enabling this transition.
        </p>
      </div>

      <div className='question-info'>
        {<Accordion defaultActiveKey="0" className='question-info-item overflow-scroll '>
          <Accordion.Item eventKey="0" className='pb-1 pb-md-2 pb-lg-3 pb-xl-4 '>
            <Accordion.Header><span className='fw-bold me-3'>01. </span>
               How do I become a host?</Accordion.Header>
            <Accordion.Body>
              Select the Contact Us or Buy Now button and fill up the for or just mail us to sales@eroev.com our executive will get in touch with you.
            </Accordion.Body>
          </Accordion.Item>
          <hr></hr>
          <Accordion.Item eventKey="1" className='py-1 py-md-2 py-lg-3 py-xl-4'>
            <Accordion.Header><span className='fw-bold me-3'>02. </span> Can I set my custom time?</Accordion.Header>
            <Accordion.Body>
              Select the Contact Us or Buy Now button and fill up the for or just mail us to sales@eroev.com our executive will get in touch with you.
            </Accordion.Body>
          </Accordion.Item>
          <hr></hr>
          <Accordion.Item eventKey="2" className='py-1 py-md-2 py-lg-3 py-xl-4'>
            <Accordion.Header><span className='fw-bold me-3'>03. </span> How to locate EroEv charger?</Accordion.Header>
            <Accordion.Body>
              Select the Contact Us or Buy Now button and fill up the for or just mail us to sales@eroev.com our executive will get in touch with you.
            </Accordion.Body>
          </Accordion.Item>
          <hr></hr>
          <Accordion.Item eventKey="3" className='py-1 py-md-2 py-lg-3 py-xl-4'>
            <Accordion.Header><span className='fw-bold me-3'>04. </span> How to start charging & payment?</Accordion.Header>
            <Accordion.Body>
              Select the Contact Us or Buy Now button and fill up the for or just mail us to sales@eroev.com our executive will get in touch with you.
            </Accordion.Body>
          </Accordion.Item>
          <hr></hr>
          <Accordion.Item eventKey="4" className='py-1 py-md-2 py-lg-3 py-xl-4'>
            <Accordion.Header><span className='fw-bold me-3'>05. </span> Can I track the electricity consumption?</Accordion.Header>
            <Accordion.Body>
              Select the Contact Us or Buy Now button and fill up the for or just mail us to sales@eroev.com our executive will get in touch with you.
            </Accordion.Body>
          </Accordion.Item>
          <hr></hr>
          <Accordion.Item eventKey="5" className='py-1 py-md-2 py-lg-3 py-xl-4'>
            <Accordion.Header><span className='fw-bold me-3'>06. </span> Can I track the consumption?</Accordion.Header>
            <Accordion.Body>
              Select the Contact Us or Buy Now button and fill up the for or just mail us to sales@eroev.com our executive will get in touch with you.
            </Accordion.Body>
          </Accordion.Item>
          <hr></hr>
        </Accordion>
        }
      </div>
    </section>
  )
}