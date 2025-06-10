import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ projects }) => {
  return (
    <div className='card-container' >
      {projects.map((project, index) => (

        <motion.div key={index} className='cardBox'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <div className='card-content-wrapper'>
            <img src={project.img} alt="img" />
            <div className="cardContent">
              <h3>{project.name}</h3>
              <a href={project.link}>
                View Code
                <FaLongArrowAltRight className='arrowIcon' />
              </a>
              {project.site &&
                <a href={project.site}>Live Demo
                  <FaLongArrowAltRight className='arrowIcon' />
                </a>

              }
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectCard
