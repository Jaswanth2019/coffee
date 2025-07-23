import React from "react";
import Textcomponent from "./Textcomponent";
import Imagecomponent from "./Imagecomponent";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="sec2-main">
      <div className="textcomponent">
        <Textcomponent
          heading="THE COFFEE HERLAD"
          img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
      </div>
      <div className="imgcomponent">
        <Imagecomponent
          sour="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg"
          heading="PREP TECHNIQUE"
          text="Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
          Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
          maecenas tempus ."
          read="- Know more"
        />
        <Imagecomponent
          sour="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-2.jpg"
          heading="FRENCH PRESS"
          text="Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
          Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
          maecenas tempus ."
          read="- Know more"
        />
        <Imagecomponent
          sour="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-3.jpg"
          heading="TURKISH IBRIK"
          text="Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
          Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
          maecenas tempus ."
          read="- Know more"
        />
      </div>
    </div>
  );
};

export default Section2;
