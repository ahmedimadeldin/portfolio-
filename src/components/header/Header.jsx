import React from 'react'
import CTA from './CTA'
import ME from "../../assets/mePxArted.jpeg"
import HeaderSocials from './HeaderSocials'

import {AiOutlineArrowRight} from "react-icons/ai"

import "./header.css"

const Header = () => {
  return (
    <header>
        <div className="container header-container">
        <h3>"Hello world!"</h3>
        <h3>It's <span>Ahmed Almahady</span> </h3>
        <h2 className='text-light'><span>Fullstack Developer </span> & <span>Data Analyst</span></h2>
        <CTA/>
        <div className='me'>
            <img src={ME} alt="me" />
            
        </div>
            <a href="#contact" className='scroll-down'>Scroll Down <AiOutlineArrowRight/></a>
        <HeaderSocials/>
        </div>        
    </header>
  )
}

export default Header