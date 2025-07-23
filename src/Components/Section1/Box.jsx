import React from "react";
import "./Box.css";
const Box = (props) => {
  return (
    <div className="box-comp">
      <div className="img-comp">
        <img src={props.img} alt="image" />
      </div>
      <div className="heading-comp">
        <p>{props.smalltext}</p>
      </div>
      <div className="text-comp">
        <h6>{props.largetext}</h6>
      </div>
    </div>
  );
};

export default Box;
