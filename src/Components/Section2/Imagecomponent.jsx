import React from "react";
import "./Imagecomponent.css";
const Imagecomponent = (props) => {
  return (
    <div className="images-comp">
      <div className="imge">
        <img src={props.sour} alt="img1" />
      </div>
      <div className="min-head">
        <h2>{props.heading}</h2>
      </div>
      <div className="textt">
        <p>{props.text}</p>
      </div>
      <div className="know-more">
        <a href="#">{props.read}</a>
      </div>
    </div>
  );
};

export default Imagecomponent;
