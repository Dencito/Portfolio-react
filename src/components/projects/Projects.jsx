import React from 'react'
import "../../index.css";
import "./projects.css";
import { projectsData } from './projectsData';
import Project from './Project';

const Projects = () => {
  return (
    <>
      <div className="scroll pt-5" id='proyectos'></div>
      <div className="projects p-5 mb-5" id='proyectos'>
      <div className="title ps-5">
        <h1 className="mb-5 fw-bold text-white">
          Mis <span className="text-rojo">Proyectos</span>
        </h1>
      </div>
      <div className="contentProjects d-flex flex-wrap gap-1">
        {projectsData.map((proyecto, index) => (
          <Project
          titleProject={proyecto.title}
          imgProject={proyecto.img}
          contentProject={proyecto.content}
          linkProject={proyecto.deploy}
          repoProject={proyecto.repo}
          key={index}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects