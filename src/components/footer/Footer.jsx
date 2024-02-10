import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="">
      <a href="#" className='footer-logo'>Ahmed Almahady</a>
      <ul className='permalinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      {/* <div className='footer-socials'>

      </div> */}
      <div className='footer-socials'>
        <small>&copy; Ahmed Almahady. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;