import React from 'react'

const Cabs = ({logo, triangle, title, content, height, width}) => {
  return (
    <div className='col-12 col-md-6 partner-info'>
      <div className='partner-info-logo'>
            <div className='d-flex justify-content-end'>
                <img src={triangle} alt="triangle" height="100px" width="150px" />
            </div>
            <div className='d-flex justify-content-start p-3'>
                <img src={logo} alt="cab" height={height} width={width} />
            </div>
      </div>
      <div className='partner-info-data bg-black text-white p-4'>
            <p className='partner-info-data-title'>{title}</p>
            <p className='partner-info-data-content '>{content}</p>
      </div>
    </div>
  )
}

export default Cabs