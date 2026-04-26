import "./About.css";
import about from "../../assets/imggirls.jpg";
import CV from "../../assets/cv.pdf";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  return (
    <div className="about section" id="about">
      <div className="section-heading">
        <h2 data-aos="fade-down">About Me</h2>
        <p data-aos="fade-left">My Story</p>
      </div>

      <div className="about-container">
        <div className="img" data-aos="flip-up">
          <div className="img-overlay">
            <h3>Asia Ashraf</h3>
            <p>Full-Stack Next.js Developer</p>
          </div>
          <img src={about} alt="Asia Ashraf" className="aboutimg" />
        </div>

        <div className="aboutsection content">
          <div className="about-content">
            <p data-aos="fade-up">
              Hi! I'm <i>Asia Ashraf</i>, a passionate{" "}
              <i>Full-Stack Next.js Developer</i> focused on building modern,
              scalable, and user-friendly web applications. I enjoy turning
              ideas into real-world products with clean UI and efficient backend
              logic.
            </p>

            <p data-aos="fade-up">
              Since starting my journey in <i>2023</i>, I’ve grown from frontend
              development into full-stack development. I have built real-world
              projects with authentication, APIs, and responsive design, honing my skills in Next.js, React, and modern web technologies. 
            </p>  

            <p data-aos="fade-up">
              I’m constantly improving my skills, exploring new technologies,
              and aiming to become a highly skilled <i>Software Engineer</i> who
              builds impactful and scalable digital solutions.
            </p>

            <p data-aos="fade-up">
              Beyond coding, I enjoy gardening 🌱, playing badminton 🏸, and
              driving 🚗 — activities that keep me creative, active, and
              balanced.
            </p>
          </div>

          <div className="quote-box" data-aos="fade-up" data-aos-delay="200">
            <p>
              "❤️ Love the art of coding and always eager to learn new
              technologies."
            </p>
          </div>

          <a
            href={CV}
            download
            className="a-btn"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
