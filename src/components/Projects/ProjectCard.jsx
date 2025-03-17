import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectCard = ({projects}) => {
  return (
    <div className='card-container'>
      {projects.map((project, index) => (
          <div key={index} className='cardBox'>
            <img src={project.img} alt="img" />
              <div className="cardContent">
                <h3>{project.name}</h3>
                <a href={project.link}>
                Open Project
                  <FaLongArrowAltRight className='arrowIcon' />
                  </a>
                  {project.site && 
                  <a href={project.site}>Live Demo</a>
                   }
              </div>

          </div>
        ))}
    </div>
  )
}

export default ProjectCard
