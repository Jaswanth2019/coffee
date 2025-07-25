import React from "react";
import "./Packetcomp.css";
const Packetcomp = (props) => {
  return (
    <div className="compimg">
      <div className="immg">
        <img src={props.img} alt="coffee packet image" />
        <div className="but">
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="text">
        <h5>{props.coffeename}</h5>
        <h6>{props.price}</h6>
      </div>
    </div>
  );
};

export default Packetcomp;
