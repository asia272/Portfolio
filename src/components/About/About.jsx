import React from 'react'
import "./About.css"
import about from "../../assets/imggirls.jpg"
import CV from "../../assets/cv.pdf"

const About = () => {
  return (
    <div className='about section' id='about'>
      <div className='section-heading'>
      <h2>About</h2>
      <p>My Story</p>
      </div>

      <div className="about-container">
      <div className="img">
             <div className="img-overlay">
              <h3>Asia Ashraf</h3>
              <p>Web Developer</p>
             
            </div>
            <img src={about} alt="" className='aboutimg' />
            
       </div>

        <div className="aboutsection content">
          <p>
          Hi! I'm Asia Ashraf, a passionate web developer specializing in frontend development. I thrive on collaborating with others to bring innovative projects to life.
           <br />
           I started my journey at the beginning of 2023 and am currently improving my backend skills to grow as a Full-Stack Developer and become a good Software Engineer.

           </p>
          
          <a href={CV} download="" className='a-btn'>
            Download CV
          </a>
            

        </div>

      </div>
       
    </div>
  )
}

export default About
