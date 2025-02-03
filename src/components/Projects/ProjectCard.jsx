import React from 'react'

const ProjectCard = ({projects}) => {
  return (
    <div>
      {projects.map((project, index) => (
          <div key={index}>
            <h5>{project.name}</h5>
            <p>{project.tec_use}</p>
            <hr />
            {/* Render additional project details as needed */}
          </div>
        ))}
    </div>
  )
}

export default ProjectCard
