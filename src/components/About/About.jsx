import React from "react";
import "./About.css";
import about from "../../assets/imggirls.jpg";
import CV from "../../assets/cv.pdf";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  return (
    <div className="about section" id="about">
      <div className="section-heading" >
        <h2 data-aos="fade-down">About Me</h2>
        <p data-aos="fade-left">My Story</p>
      </div>

      <div className="about-container">
        <div className="img" data-aos="zoom-in">
          <div className="img-overlay"  >
            <h3>Asia Ashraf</h3>
            <p>Web Developer</p>
          </div>
          <img src={about} alt="Asia Ashraf" className="aboutimg"
          />
        </div>

        <div className="aboutsection content">
          <div className="about-content" >
            <p data-aos="fade-up">
              Hi! I'm <i>Asia Ashraf</i>, a passionate web developer specializing in frontend
              development. I love turning ideas into reality by creating responsive and
              interactive websites.
            </p>
            <p data-aos="fade-up">
              I started my journey at the start of <i>2023</i> and am now learning backend
              development to expand my skills, handle data efficiently, and grow as a Full-Stack
              Developer to become a good <i>Software Engineer</i>.
            </p>
            <p data-aos="fade-up">
              <i>Coding</i> 💻 is my passion, and I’m always looking for opportunities to learn,
              improve, and contribute to meaningful projects.
            </p>
            <p data-aos="fade-up">
              Beyond coding, I have a keen interest in gardening, especially growing beautiful
              flowers! I also enjoy playing badminton to stay active and energized.
              Additionally, I love <i>driving</i>.
            </p>
          </div>

          <div className="quote-box" data-aos="fade-up" data-aos-delay="200">
            <p>"❤️ Love the art of coding and always eager to learn new technologies."</p>
          </div>

          <a href={CV} download className="a-btn" data-aos="zoom-in" data-aos-delay="300">
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
