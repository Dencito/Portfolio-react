import React from "react";
import "../../index.css";
import "./resume.css";
import ilustracion from "../../assets/ilustracion-estudios.png";


import {handleClickColapseEducacion, handleClickColapseSkills, handleClickColapseCertificados} from "./CreateColapse"

const Resume = () => {

  return (
    <>
      <div className="scroll pt-5" id="colapse-educacion-habilidades"></div>
      <div className="resumen my-5 mx-auto">
        <div className="botonesLinks">
          <button
            onClick={() => handleClickColapseEducacion()}
            className="deploy"
          >
            Educación
          </button>
          <button onClick={() => handleClickColapseSkills()}>
            Habilidades
          </button>
          <button onClick={() => handleClickColapseCertificados()}>
            Certificados
          </button>
        </div>
        <div className="contendorColapse center d-flex flex-column flex-xl-row justify-content-between p-5 mt-5 pt-5">
          <div className="contenidoImg col-12 col-sm-10 col-md-6 col-xl-5 col-xxl-4 ps-lg-5 mx-auto pt-5 mt-5 mt-xl-0">
            <img src={ilustracion} alt="" className="img-main d-block w-100" />
          </div>
          <div
            className="contenidoText d-flex flex-column justify-content-center col-12 col-sm-11 col-md-10 col-lg-10 col-xl-5 col-xxl-5 mx-auto mt-5 mt-lg-0"
            id="contenedorColapse"
          >
            <div className="estudio col-12 p-2 p-sm-5 m-1 mx-auto my-4 text-white">
              <div className="title">
                <h2 className="text-rojo fw-bold mt-3 mb-1">
                  TERCIARIO: 2022 (En curso)
                </h2>
                <p className="h5 text-gris">
                  Institución de Formacion Técnica Superior N°11
                </p>
                <span className="h5 text-blanco">
                  PLAN DE ESTUDIOS DE LA CARRERA:
                </span>
                <ul className="text-gris my-2">
                  <li>Administración de base de datos.</li>
                  <li>Desarrollo de Sistemas Web Full-Stack.</li>
                  <li>Desarrollo de Sistemas Orientados a Objetos.</li>
                  <li>Modelado y Diseño de Software.</li>
                  <li>Desarrollo de Aplicaciones para Dispositivos.</li>
                  <li>Metodologías de Pruebas de Sistemas.</li>
                </ul>
              </div>
            </div>
            <div className="estudio col-12 p-2 p-sm-5 m-1 mx-auto my-4 text-white">
              <div className="title">
                <h2 className="text-rojo fw-bold mt-3 mb-1">
                  SECUNDARIO: 2015-2021 (Terminado)
                </h2>
                <p className="h5 text-gris">
                  Escuela Técnica N°7 Dolores Lavalle de Lavalle
                </p>
                <span className="h5 text-blanco">
                  Título obtenido: Técnico en Computación:
                </span>
                <ul className="text-gris my-2">
                  <li>
                    Programación nivel básico (C# para Arduino, C++ Orientado a
                    Objetos, JavaScript Orientado a Objetos).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
