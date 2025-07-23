import React from "react";
import { useState } from "react";
import "./Herosection.css";
import Navbar from "../Navbar/Navbar";
const images = [
  "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-1-slider-image-1.jpg",
  "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-1-slider-image-2.jpg",
  "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-1-slider-image-3.jpg",
];
const Herosection = () => {
  const [index, setIndex] = useState(0);
  const nextside = () => {
    setIndex((prev) => {
      const updatedIndex = (prev + 1) % images.length;
      console.log("Next index:", updatedIndex);
      return updatedIndex;
    });
  };

  const prevside = () => {
    setIndex((prev) => {
      const updatedIndex = (prev - 1 + images.length) % images.length;
      console.log("Prev index:", updatedIndex);
      return updatedIndex;
    });
  };

  return (
    <div className="main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="carousel-img">
        <img src={images[index]} alt="slider1" />
      </div>
      <div className="prevbutton">
        <button onClick={prevside}>❮</button>
      </div>
      <div className="nextbutton">
        <button
          onClick={() => {
            console.log("Next button clicked");
            nextside();
          }}
        >
          ❯
        </button>
      </div>

      <div className="carousel-text">
        <div className="top-img">
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h1-slider-img-1.png"
            alt="logo"
          />
        </div>
        <div className="heading">
          <h1>COFFEE HEAVEN</h1>
        </div>
        <div className="leaf-img">
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/slider-separator-img.png"
            alt="leaf img"
          />
        </div>
        <div className="basic-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            maxime facere beatae sapiente harum id. Fuga delectus dolore
            doloribus quibusdam?
          </p>
        </div>
        <div className="shop-button">
          <button>SHOP HERE</button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
