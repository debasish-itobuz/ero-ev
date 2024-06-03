import React, { useState } from 'react';
import man from '../../images/home/drives/man.png'
import play from '../../images/home/drives/play.svg'
import VideoModal from '../../modals/VideoModal';

const Drive = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <section className='screenSize drive'>
        <h2 className='drive-heading text-center text-md-start'>Making Drives Worry-Free.</h2>
        <div className='position-relative'>
          <img src={man} alt="man" width="100%" height="100%" />
          <img src={play} alt="play" width="100px" height="100px" onClick={handleClick} className=' position-absolute top-50 start-50 translate-middle play' />
        </div>
      </section>
      <VideoModal open={open} setOpen={setOpen} />
    </>
  )
}

export default Drive