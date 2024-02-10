import React from 'react';
import "./services.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Services = () => {
  return (
    <section id='services'>
      {/* <h5>What I Offer</h5> */}
      <h2>Services</h2>

      <div className='container services-container'>
        {/* First card */}
       {/* <article className='service'>
        <div className='service-head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service-list'>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' />
            <p>lorem ipsum</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' />
            <p>lorem ipsum</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' />
            <p>lorem ipsum</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' />
            <p>lorem ipsum</p>
          </li>
          
        </ul>
       </article> */}
       {/* Second Card */}
       <article className='service'>
        <div className='service-head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service-list'>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' size={25} />
            <p>Designing visually appealing and user-friendly interfaces for websites.</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' size={25} />
            <p>Ensuring responsive design for different screen sizes.</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' size={25} />
            <p>Combining frontend and backend development to create end-to-end solutions.</p>
          </li>
          {/* <li>
            <IoIosCheckmarkCircle className='service-list-icon' />
            <p>lorem ipsum</p>
          </li> */}
          
        </ul>
       </article>
       {/* Third Card */}
       <article className='service'>
        <div className='service-head'>
          <h3>Data Analysis</h3>
        </div>
        <ul className='service-list'>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' size={25} />
            <p>Data Mining and Statistical Analysis.</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' size={25}/>
            <p>Data visualisation, storytelling with data and presentation.</p>
          </li>
          <li>
            <IoIosCheckmarkCircle className='service-list-icon' size={25}/>
            <p>Business Intelligence and Strategy.</p>
          </li>
          {/* <li>
            <IoIosCheckmarkCircle className='service-list-icon' />
            <p>lorem ipsum</p>
          </li> */}
          
        </ul>
       </article>
      </div>
    </section>
  )
}

export default Services