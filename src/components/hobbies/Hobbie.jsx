import React from "react";
import "../../index.css";
import "./hobbies.css";
const Hobbie = ({classIcon, titleHobbie, contenidoHobbie}) => {
  return (
    <div className="hobbie col-12 col-sm-10 col-md-7 col-xl-5 col-xxl-3 p-5 m-1 mx-auto my-4">
      <div className="icon mb-3">
        <i className={classIcon}></i>
      </div>
    <div className="titleHobbie">
        <h2>{titleHobbie}</h2>
    </div>
    <div className="contenidoHobbie">
        <p>{contenidoHobbie}</p>
    </div>
    </div>
  );
};

export default Hobbie;
