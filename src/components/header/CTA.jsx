import React from 'react'
import CV from "../../assets/AhmedAlmahadyCV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download={true}>Download CV</a>
        <a className='btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA;