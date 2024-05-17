import React from 'react'
import man from '../../images/drives/man.png'

const Drive = () => {
  return (
    <div className='screenSize mt-2 mt-lg-4 drive p-2 p-md-3'>
      <h2 className='mb-3 mb-lg-4 drive-heading'>Making Drives Worry-Free.</h2>
      <div className='drive-img'>
        <img src={man} alt="man" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Drive
