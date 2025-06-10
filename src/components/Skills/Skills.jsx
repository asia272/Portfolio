import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
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
    <motion.section className="skills-section " id="skills"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true }}>
      <div className="section-heading">
        <h2>Skills</h2>
        <p>Developing with...</p>
      </div>
  <div className="skills-icons">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      className="skill-box"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      {skill.icon}
      <span>{skill.name}</span>
      <p style={{ fontSize: "11px" }}>Intermediate</p>
    </motion.div>
  ))}
</div>

    </motion.section>
  );
};

export default Skills;
