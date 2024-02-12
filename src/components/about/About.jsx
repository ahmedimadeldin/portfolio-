import React from 'react'
import "./about.css"
import ME from "../../assets/MeNerding.jpg"
import { FaAward, FaUsers } from 'react-icons/fa'
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h1>About Me</h1>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={ME} alt="About Image" />
          </div>
          
        </div>

        <div className='about-content'>
          <div className="about-cards">
            <article className='about-card'>
              <FaAward size={30} className='about-card-icon'/>
              <h5>Experience</h5>
              <small>+1 Years Working</small>
            </article>
            <article className='about-card'>
              <FaUsers size={30} className='about-card-icon'/>
              <h5>Clients</h5>
              <small>+20 Clients</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary size={30} className='about-card-icon'/>
              <h5>Projects</h5>
              <small>+10 Projects</small>
            </article>
          </div>
          <p className='line'>
            Call me Ahmed, Software Engineer , University of Khartoum graduate.
            I most enjoy building software in the sweet
            spot where design and engineering meet — things that look good but are also built well under the hood.
            With an insatiable curiosity and a keen analytical mind, usually exploring vast 
            datasets for extracting meaningfull information or fun. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;