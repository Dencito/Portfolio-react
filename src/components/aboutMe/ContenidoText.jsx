import React from "react";
import "../../index.css";
import "./aboutMe.css";
import { Typewriter } from "react-simple-typewriter";
import ContactMe from "./ContactMe";
const ContenidoText = () => {
  return (
    <div className="contenidoText d-flex flex-column justify-content-center col-12 col-sm-10 col-md-8 col-xl-6 col-xxl-6 mx-auto">
      <h1 className="text-white mx-auto mx-md-0 fw-bold">
        👋 Hola, Soy Denar Padilla G.
      </h1>
      <p className="h1 text-white mx-auto mx-md-0 fw-bold">
        Un{" "}
        <span className="text-rojo">
          <Typewriter
            words={["Desarrollador Web", "Desarrollador React.js Trainee"]}
            typeSpeed={30}
            loop={true}
          />
        </span>
      </p>
      <p className="text-white fs-5 fw-light pe-0 pe-md-5 col-12 mx-auto mt-4">
        Me considero una persona <span className="text-rojo">honesta</span>,{" "}
        <span className="text-rojo">responsable</span> y detallista, con muchas
        ganas de seguir aprendiendo nuevas habilidades y{" "}
        <span className="text-rojo">tecnologías web</span> para mi desarrollo{" "}
        <span className="text-rojo">profesional como personal</span>. Siempre
        doy lo mejor de mí para completar las tareas con el mejor resultado
        posible.
      </p>

    <ContactMe/>
    </div>
  );
};

export default ContenidoText;
