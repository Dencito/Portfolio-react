import React from "react";
import "../../index.css";
import "./projects.css";

const Project = ({ titleProject, imgProject, contentProject, repoProject, linkProject }) => {
  return (
    <div className="proyecto col-12 col-sm-10 col-md-7 col-xl-5 col-xxl-3 p-5 m-1 mx-auto my-4 text-white">
      <div className="img mb-3">
        <img src={imgProject} alt={contentProject} className="w-100" />
      </div>
      <div className="titleHobbie">
        <h2 className="text-rojo mt-4 mb-3">{titleProject}</h2>
      </div>
      <div className="contenidoHobbie my-4 mb-5">
        <p>{contentProject}</p>
      </div>
      <div className="deploy">
        <a href={repoProject} className="repo" target="_blank">
          <i className="fa-solid fa-code-branch"></i>
        </a>
        <a href={linkProject} className="link" target="_blank">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
