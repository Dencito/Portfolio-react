import React from 'react'
import "../../index.css";
import "./aboutMe.css";
import ilustracionMain from "../../assets/ilustracion-main.png";

const Ilustracion = () => {
  return (
    <div className="contenidoImg col-12 col-sm-10 col-md-8 col-xl-5 col-xxl-5 mx-auto mb-5 index-99">
          <img
            src={ilustracionMain}
            alt=""
            className="img-main d-block w-100 index-99"
          />
        </div>
  )
}

export default Ilustracion