import React from "react";
import "../HeroSection/HeroSection.css";
import myImg from "../../assets/myimg.jpeg";
import { Typewriter } from "react-simple-typewriter";
import BackHandIcon from "@mui/icons-material/BackHand";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero-section section" id="home">
      <div className="container">
        <div className="content">
          <i className="boi-i">Web Developer,</i>
          <motion.h1
            className="name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Asia Ashraf
          </motion.h1>
          <motion.h1
            className="type"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            I'm a{" "}
            <span>
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
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            As a dedicated front-end developer, I specialize in designing and
            building dynamic, interactive user interfaces that deliver seamless
            and engaging experiences.
          </motion.p>

    
          <motion.a
            href="#contact"
            className="hi a-btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Say Hi,
            <BackHandIcon className="hi hand-icon" />
          </motion.a>
        </div>

        <div className="img-box">
         <motion.img src={myImg}
          alt="Asia Ashraf"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
