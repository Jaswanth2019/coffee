import React from "react";
import "./Section5.css";
import Packetcomp from "./Packetcomp";
const Section5 = () => {
  return (
    <div className="sec5-box">
      <div className="text-box">
        <div className="head">
          <h2>ONLINE COFFEE SHOP</h2>
        </div>
        <div className="leaf-img">
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt="leaf-img"
          />
        </div>
        <div className="text">
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </h6>
        </div>
      </div>
      <div className="img-box">
        <Packetcomp
          img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
          coffeename="ETHIOPIA COFFEE"
          price="$15.00"
        />
        <Packetcomp
          img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png"
          coffeename="KENYA COFFEE"
          price="$18.00"
        />
        <Packetcomp
          img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
          coffeename="COLUMBIA COFFEE"
          price="$21.00"
        />
        <Packetcomp
          img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-8.png"
          coffeename="GUATEMALA COFFEE"
          price="$25.00"
        />
      </div>
    </div>
  );
};

export default Section5;
