import React from "react";
import "../../index.css";
import Hobbie from "./Hobbie";
import "./hobbies.css";
import { hobbiesData } from "./hobbiesData";

const Hobbies = () => {
  
  return (
    <div className="hobbies p-5 mb-5" id="hobbies">
      <div className="title ps-5">
        <h1 className="mb-5 fw-bold text-white">
          Mis <span className="text-rojo">Hobbies</span>
        </h1>
      </div>
      <div className="contentHobbies d-flex flex-wrap gap-1">
        {hobbiesData.map((hobbie, index) => (
          <Hobbie
            classIcon={hobbie.icon}
            titleHobbie={hobbie.title}
            contenidoHobbie={hobbie.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
