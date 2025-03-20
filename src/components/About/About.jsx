import React from "react";
import "./About.css";
import about from "../../assets/imggirls.jpg";
import CV from "../../assets/cv.pdf";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about section"
      id="about"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: false, amount: 0.3 }}
    >

      <div
        className="section-heading"
      >
        <h2>About Me</h2>
        <p>My Story</p>
      </div>

      <div className="about-container">

        <motion.div
          className="img"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0 }}
        >
          <div className="img-overlay">
            <h3>Asia Ashraf</h3>
            <p>Web Developer</p>
          </div>
          <img src={about} alt="Asia Ashraf" className="aboutimg" />
        </motion.div>

        <motion.div
          className="aboutsection content"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeIn", delay: 0.3 }}
        >
          <div className="about-content">
            <p>
              Hi! I'm <i>Asia Ashraf</i>, a passionate web developer specializing in frontend
              development. I love turning ideas into reality by creating responsive and
              interactive websites.
            </p>
            <p>
              I started my journey at the start of <i>2023</i> and am now learning backend
              development to expand my skills, handle data efficiently, and grow as a Full-Stack
              Developer to become a good <i>Software Engineer</i>.
            </p>
            <p>
              <i>Coding</i> 💻 is my passion, and I’m always looking for opportunities to learn,
              improve, and contribute to meaningful projects.
            </p>
            <p>
              Beyond coding, I have a keen interest in gardening, especially growing beautiful
              flowers! I also enjoy playing badminton to stay active and energized.
              Additionally, I love <i>driving</i>.
            </p>
          </div>


          <div className="quote-box">
            <p>"❤️ Love the art of coding and always eager to learn new technologies."</p>
          </div>


          <motion.a
            href={CV}
            download=""
            className="a-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
