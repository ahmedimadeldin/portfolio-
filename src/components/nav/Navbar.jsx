import React, { useState } from 'react';
import "./navbar.css";
import {BiHomeCircle,BiBook , BiLogoTelegram } from "react-icons/bi";
import { AiOutlineUser } from 'react-icons/ai';
import { BsBriefcaseFill} from "react-icons/bs";
import {BiMessageAltDetail} from "react-icons/bi"

const Navbar = () => {

  const[activeNav,setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active': ''}><BiHomeCircle size={30}/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''}><AiOutlineUser size={30}/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''}><BiBook size={30}/></a> 
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'? 'active': ''}><BsBriefcaseFill size={30}/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''}><BiMessageAltDetail size={30}/></a>
    </nav>
  )
}

export default Navbar;