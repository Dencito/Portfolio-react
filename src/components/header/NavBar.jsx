import React from "react";
import './navBar.css'
import '../../index.css'
import logo from "../../assets/logo.png"
import { useScrollDirection } from "./Scroll";

const NavBar = () => {
  const scrollDirection = useScrollDirection();
  
  return (
    <nav className={`navbar navbar-expand-lg bg-navBar index-100 sticky ${ scrollDirection === "down" ? "up" : "top-0"}`}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width={45}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-2">
            <a className="nav-link" aria-current="page" href="#inicio">
              Inicio
            </a>
            <a className="nav-link" href="#colapse-educacion-habilidades">
              Educación | Habilidades
            </a>
            <a className="nav-link" href="#proyectos">
              Proyectos
            </a>
            <a className="nav-link" href="#hobbies">
              Hobbies
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
