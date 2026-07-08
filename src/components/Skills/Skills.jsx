import React, { useState } from "react";
import "./Skills.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiAuth0,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const skillCategories = [
    {
      title: "Frontend Development",
      type: "frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
      ],
    },
    {
      title: "Backend Development",
      type: "backend",
      skills: [
        { icon: <FaDatabase />, name: "REST APIs" },
        { icon: <SiPrisma />, name: "Prisma ORM" },
      ],
    },
    {
      title: "Database Management",
      type: "database",
      skills: [
        { icon: <FaDatabase />, name: "MongoDB" },
        { icon: <FaDatabase />, name: "SQL" },
      ],
    },
    {
      title: "Authentication & Tools",
      type: "auth",
      skills: [{ icon: <SiAuth0 />, name: "Clerk Auth" }],
    },
  ];


  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.type === activeTab);

  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <div className="section-heading">
        <h2 data-aos="fade-left">Skills</h2>
        <p data-aos="fade-right" data-aos-delay="100">
          Technologies I work with
        </p>
      </div>

      <div className="skills-filter">
        {["All", "frontend", "backend", "database", "auth"].map((tab, index) => (
          <button
            key={tab}

            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab === "All" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="skills-categories">
        {filteredCategories.map((category, i) => (
          <div key={i} className="skills-category" data-aos="fade-up">
            <h3 className="category-title">{category.title}</h3>

            <div className="skills-icons">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
