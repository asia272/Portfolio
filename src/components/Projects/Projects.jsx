import React, { useEffect, useState } from 'react'
import { data } from './data'
import ProjectCard from './ProjectCard';
import "./Projects.css"
import { projectBtn } from './data';

const Projects = () => {

  const [projects, setProjects] = useState(data);
  const [activeBtn, setActiveBtn] = useState("all")

  // Find  project 
  let findProject = (tecnology) => {
    setActiveBtn(tecnology)

    if (tecnology === "all") {
      setProjects(data)
    } else {
      const foundItems = data.filter(pro => pro.tec_use === tecnology);
      setProjects(foundItems)
    }
  }

  return (
    <div className='projects section' id='projects'>
      <div className="section-heading">
        <h2>Projects</h2>
        <p>See my projects!</p>
      </div>

      <div className="btn-box">
        {projectBtn.map((btn, index) =>
          <button
            key={index}
            className={activeBtn === btn.btn ? "activeBtn" : "projectBtn"}
            onClick={() => findProject(btn.btn)}
          >
            {btn.btn}
          </button>
        )}
      </div>
      {/* Rendring projects */}
      <ProjectCard projects={projects} />
    </div>

  )
}

export default Projects
