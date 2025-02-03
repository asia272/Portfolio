import React, { useState } from 'react'
import { data } from './data'
import ProjectCard from './ProjectCard';
import "./Projects.css"
import { useActionState } from 'react';

const Projects = () => {

const [projects, setProjects] = useState([]);
const [active, setActive] = useState("all")

  // Find  project 
let findProject = (tecnology)=>{

  setActive(tecnology)

  if(tecnology =="all"){
   setProjects(data)
  }else{
    const foundItems = data.filter(pro => pro.tec_use === tecnology);
    console.log(foundItems)
    setProjects(foundItems)
  }
}

  return (
    <div className='projects section' id='projects'>
      <h2>Projects</h2>
      <div className="btn-box">
      <button className= {active=="all"?"active":"projectBtn"} onClick={()=>findProject("all")}>all</button>

      <button className= {active=="htmlCss"?"active":"projectBtn"} onClick={()=>findProject("htmlCss")}>htmlCss</button>
      <button className= {active=="htmlCssJs"?"active":"projectBtn"} onClick={()=>findProject("htmlCssJs")}>htmlCssJs</button>
      <button  className= {active=="htmlCssJsReact"?"active":"projectBtn"} onClick={()=>findProject("htmlCssJsReact")}>htmlCssJsReact</button>

      </div>
      
    {/* Rendring projects */}
        <ProjectCard projects={projects}/>
    </div>
    
  )
}

export default Projects
