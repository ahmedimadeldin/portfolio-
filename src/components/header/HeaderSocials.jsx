import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import {FaGithub, FaLaptopCode  } from "react-icons/fa"
import { IoStatsChart } from "react-icons/io5";
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/ahmed-imadeldin/" target='_blank'><BsLinkedin size={30}/></a>
        <a href="https://github.com/ahmedimadeldin" target='_blank'><FaGithub size={30}/> </a>
        <a href="https://zindi.africa/users/ahmedimad" target='_blank'><FaLaptopCode size={30}/></a>
        {/* <a href="https://tableau.com" target='_blank'><IoStatsChart size={30}/></a> */}
    </div>
  )
}

export default HeaderSocials;