import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/dalleportfolio.png"
import IMG2 from "../../assets/fiverportfolio.png"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
// import IMG5 from "../../assets/portfolio5.jpg"
// import IMG6 from "../../assets/portfolio6.jpg"


const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>Some of my Recent Work</h5>
     <h2>Portfolio</h2>

     <div className='container portfolio-container'>
      {/* portfolio item1 */}
      <article className='portfolio-item'>
      <h3>Ai image generating website utilizing openai api</h3>
      <div className='portfolio-item-img'>
        <a href="https://dalle-six-orpin.vercel.app/" target='_blank'><img src={IMG1} alt="" /></a>
      </div>
      </article>
      {/* portfolio item2 */}
      <article className='portfolio-item'>
      <h3>fiverr clone - multi services website </h3>
      <div className='portfolio-item-img'>
        <a href="https://fiverr-ten-phi.vercel.app/" target='_blank'><img src={IMG2} alt="" /></a>
      </div>
      </article>
      {/* portfolio item3 */}
      {/* <article className='portfolio-item'>
      <h3>This is a portfolio item title</h3>
      <div className='portfolio-item-img'>
        <a href="demo" target='_blank'><img src={IMG3} alt="" /></a>
      </div>
      </article> */}

     </div>
    </section >
  )
}

export default Portfolio