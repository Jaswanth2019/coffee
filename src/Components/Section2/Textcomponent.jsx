import React from "react";
import "./Textcomponent.css";
const Textcomponent = (props) => {
  return (
    <div className="text-component">
      <div className="header">
        <h2>{props.heading}</h2>
      </div>
      <div className="leaf-img">
        <img src={props.img} alt="leaf-img" />
      </div>
      <div className="section-text">
        <h6>{props.text}</h6>
      </div>
    </div>
  );
};

export default Textcomponent;
