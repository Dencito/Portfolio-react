import React from "react";
import "../../index.css";
import "./aboutMe.css";
import Ilustracion from "./ilustracion";
import ContenidoText from "./ContenidoText";

const AboutMe = () => {
  return (
    <main className="contenidoPrincipal">
      <div className="center d-flex flex-column-reverse flex-xl-row justify-content-between p-5 mt-5 pt-5">
        <ContenidoText/>
        <Ilustracion/>
      </div>
    </main>
  );
};

export default AboutMe;
