import React from "react";
import "./Imgcomp.css";
const Imgcomp = (props) => {
  return (
    <div className="imgs">
      <a href="#">
        <img src={props.sou} alt="image1" />
        <div className="text">
          <h3>{props.head}</h3>
          <span>Cup of Coffee </span>
          <span>/ </span>
          <span>Filtered</span>
        </div>
      </a>
    </div>
  );
};

export default Imgcomp;
