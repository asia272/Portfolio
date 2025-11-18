import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "SQL" },
  ];

  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <div className="section-heading">
        <h2 data-aos="fade-left">Skills</h2>
        <p data-aos="fade-right" data-aos-delay="100">Developing with...</p>
      </div>

      <div className="skills-icons">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {skill.icon}
            <span>{skill.name}</span>
            <p style={{ fontSize: "11px" }}>Intermediate</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
