import React from "react";
import "./Section6.css";
import Imgcomp from "./Imgcomp";
const Section6 = () => {
  return (
    <div className="sec6-box">
      <div className="texts">
        <h1>OUR SWEET GALLERY</h1>
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
          alt="leaf-img"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="img-boxes">
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-gallery-1.jpg"
          head="PERFECT CUP"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-2.jpg"
          head="BREWED"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-3.jpg"
          head="COFFEE DRIPS"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-7.jpg"
          head="BAKED BEANS"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-5.jpg"
          head="BEST AROMAS"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-6.jpg"
          head="CREAMS"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-4.jpg"
          head="ENJOYMENT"
        />
        <Imgcomp
          sou="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-img-8.jpg"
          head="BIG MUGS"
        />
      </div>
      <div className="img2-box">
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-1.png"
          alt="img"
        />
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2-hover.png"
          alt="img"
        />
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3-hover.png"
          alt="img"
        />
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4-hover.png"
          alt="img"
        />
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-5-hover.png"
          alt="img"
        />
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-6-hover.png"
          alt="img"
        />
      </div>
      <div className="final-div">
        <div className="textts">
          <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO</p>
        </div>
        <div className="sub-but">
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
