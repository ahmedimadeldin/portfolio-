import React from 'react';
import "./experience.css"
import { FaChartBar, FaCss3,  FaDatabase,  FaFileExcel,  FaHtml5, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { BiBarChartAlt, BiChart, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { BsFileExcel, BsFiletypeJava } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import { AiFillFileExcel } from 'react-icons/ai';

const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5>The Skills I have</h5> */}
      <h2>Skills & Technologies</h2>

      <div className="container experience-container">
        <div className='experience-frontend'>
            <h3>Frontend Development</h3>
          <div className='experience-content'>
            <article className='details'>
            <FaHtml5 size={30}/>
            <h4>HTML</h4>
            {/* <small className='text-light'>Exerienced</small> */}
            </article>
            {/* 1 */}
            <article className='details'>
            <FaCss3 size={30}/>
            <h4>CSS</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 2 */}
            <article className='details'>
            <BiLogoJavascript size={30}/>
            <h4>Javascript</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 3 */}
            <article className='details'>
            <BiLogoTailwindCss size={30}/>
            <h4>Tailwind</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 4 */}
            <article className='details'>
            <BiLogoReact size={30}/>
            <h4>React</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>

          </div>

        </div> 
        {/* second div */}
        <div className='experience-backend'>
          <h3>Backend Development</h3>
         <div className='experience-content'>
         <article className='details'>
            <FaNodeJs size={30}/>
            <h4>Node JS</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 2 */}
            <article className='details'>
            <VscJson size={30}/>
            <h4>Express JS</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 3 */}
            <article className='details'>
            <BiLogoMongodb size={30}/>
            <h4>NO SQL Databases :MongoDB</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 4 */}
            <article className='details'>
            <FaDatabase size={30}/>
            <h4>SQL Databases: MySql</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
         </div>

        </div>
        {/* Third div */}
         
         <div className="experience-data-Analysis">
            <h3>Data Analysis</h3>
          <div className='experience-content'>
            <article className='details'>
            <FaPython size={30}/>
            <div>

            <h4>Python</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </div>
            </article>
            {/* 1 */}
            <article className='details'>
            <FaChartBar size={30}/>
            <h4>Tableau</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </article>
            {/* 2 */}
            <article className='details'>
            <FaFileExcel size={30}/>
            <h4>Microsoft Excel</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
            {/* 3 */}
            <article className='details'>
            <FaChartBar size={30}/>
            <h4>Microsoft PowerBI</h4>
            {/* <small className='text-light'>Intermediate</small> */}
            </article>
          </div>
         </div>

      </div>
    </section>
  )
}

export default Experience