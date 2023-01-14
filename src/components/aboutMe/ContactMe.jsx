import React from "react";
import "../../index.css";
import "./contactMe.css";

const ContactMe = () => {
  return (
    <div className="Contactame mt-4">
      <a className="icon d-inline">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a className="icon d-inline">
        <i className="fa-regular fa-envelope-open"></i>
      </a>
      <a className="icon d-inline">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default ContactMe;
