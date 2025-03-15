import React from "react";
import "../HeroSection/HeroSection.css";
import myImg from "../../assets/myimg.jpeg";
import { Typewriter } from "react-simple-typewriter";
import BackHandIcon from "@mui/icons-material/BackHand";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="hero-section section" id="home">
      <div className="container">
        <div className="content">
          <i className="boi-i">Web Developer,</i>
          <h1 className="name">Asia Ashraf</h1>
          <h1 className="type">
            I'm a <span>
              <Typewriter
                words={["Web Developer", "Frontend Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p>
            As a dedicated front-end developer, I specialize in designing and
            building dynamic, interactive user interfaces that deliver seamless
            and engaging experiences.
          </p>
          <a href="#contact" className="hi a-btn">
            Say Hi,
            <BackHandIcon className="hi hand-icon" />
          </a>
        </div>
        <img src={myImg} alt="Asia Ashraf" className="img-box" />
      </div>
    </div>
  );
};

export default HeroSection;
