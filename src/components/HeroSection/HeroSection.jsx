import React from 'react'
import "../HeroSection/HeroSection.css"
import myImg from "../../assets/myimg.jpeg"
import TypingEffect from "react-typing-effect";
import BackHandIcon from '@mui/icons-material/BackHand';
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <div className="hero-section section" id="home">
      <div className="container">
        <div className="content">
          <i className='boi-i'>Web Developer,</i>
          <h1 className="name">Asia Ashraf</h1>
          <h1 className="type">
            I'm a  <span>
              <TypingEffect
                text={[" Web Developer", " Frontend Developer"]}
                speed={100}
                eraseDelay={1500}
                typingDelay={500}
              />
            </span>
          </h1>
          <p>
            As a dedicated front-end developer, I specialize in designing and building dynamic, interactive user interfaces that deliver seamless and engaging experiences.
          </p>
          <a href="#contact" className="hi a-btn">
            Say Hi,
            <BackHandIcon className="hi hand-icon" />
          </a>
        </div>
          <img src={myImg} alt="myImg"
            className="img-box"
            // style={{ width: "200px" }}
  
          />
      </div>
    </div>

  )
}


export default HeroSection
