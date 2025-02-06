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
    { icon: <FaDatabase />, name: "SQL" }, // Adding SQL with a general database icon
  ];

  return (
    <section className="skills-section " id="skills">
      <h2>My Skills</h2>
      <div className="skills-icons">
        {skills.map((skill, index) => (
          <div key={index}>
              {skill.icon}
            <span>{skill.name}</span>
            <p style={{fontSize:"11px"}}>Intermediate</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
