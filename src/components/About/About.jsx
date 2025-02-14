import React from 'react'
import "./About.css"
import about from "../../assets/imggirls.jpg"
import CV from "../../assets/cv.pdf"

const About = () => {
  return (
    <div className='about section' id='about'>
      <div className='section-heading'>
      <h2>About Me</h2>
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
           <div className="about-content">
            <p>Hi! I'm <i>Asia Ashraf</i>, a passionate web developer specializing in frontend development.
             I love turning ideas into reality by creating responsive and interactive websites.
            </p>
            <p>
             I started my journey at the start of <i>2023</i>, and I'm now diving into backend development to expand my skills and grow as a Full-Stack Developer. My goal is to become a proficient <i>Software Engineer</i> who can tackle complex problems and build meaningful solutions.
            </p>
            <p>
             <i>Coding</i> 💻 is my passion, and I’m always looking for opportunities to learn, improve, and contribute to meaningful projects.
            </p>
            <p>
              Beyond coding, I have a keen interest in gardening, especially growing beautiful flowers!
              I also enjoy playing badminton  to stay active and energized.  
              Additionally, I love driving as it gives me a sense of freedom and adventure!  
            </p>
           </div>
            <div className='quote-box'>
              <p>"Challenge yourself to evolve, as every line of code is a step toward growth."</p>
            </div>
          <a href={CV} download="" className='a-btn'>
            Download CV
          </a>
            

        </div>

      </div>
       
    </div>
  )
}

export default About
