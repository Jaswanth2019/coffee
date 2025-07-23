import React from "react";
import "./Section1.css";
import Textcomponent from "../Section2/Textcomponent";
import Box from "./Box";
const Section1 = () => {
  return (
    <div className="container">
      <div className="text-div">
        <Textcomponent
          heading="OUR DELICIOUS OFFER"
          img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
      </div>
      <div className="img-div">
        <div className="fir-box">
          <Box
            img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"
            smalltext="TYPES OF COFFEE"
            largetext="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
          />
          <Box
            img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-6.png"
            smalltext="BEAN VARIETIES"
            largetext="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
          />
          <Box
            img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-7.png"
            smalltext="COFFEE & PASTRY"
            largetext="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
          />
          <Box
            img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-8.png"
            smalltext="COFFEE TO GO"
            largetext="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;

//  <div className="text-div">
//         <div className="heading">
//           <h2>OUR DELICIOUS OFFER</h2>
//         </div>
//         <div className="leaf-img">
//           <img
//             src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
//             alt="leaf img"
//           />
//         </div>
//         <div className="sec1-text">
//           <h5>
//             {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore */}
//             <div className="t1">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             </div>
//             <div className="2">
//               eiusmod tempor incididunt ut labore et dolore
//             </div>
//           </h5>
//         </div>
//       </div>
