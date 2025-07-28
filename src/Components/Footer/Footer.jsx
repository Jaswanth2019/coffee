import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="top-foot">
        <img
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer-sidearea.png"
          alt="footer-img"
        />
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p>
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
        <p> nostrud exercitation ullamco laboris.”</p>
        <h5>STORES</h5>
        <span>Dunsmuir Ave, Los Angeles, CA 90036, USA</span>
        <span>Atkins Ave, Brooklyn, NY 11208, USA</span>

        <div className="pp">
          <span>NEWS AS FRESH AS OUR COFFEE</span>
        </div>
        <div className="mai">
          <input type="email" name="" id="" placeholder="Your E-mail Address" />
          <i class="ph-thin ph-envelope co-but"></i>
        </div>
      </div>
      <div className="down-foot">
        <div className="copyright">
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
        </div>
        <div className="unlist">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">CONTANCT</a>
            </li>
          </ul>
        </div>
        <div className="unor-soc">
          <ul>
            <li>
              <i class="ph-thin ph-instagram-logo"></i>
            </li>
            <li>
              <i class="ph-thin ph-twitter-logo"></i>
            </li>
            <li>
              <i class="ph-thin ph-facebook-logo"></i>
            </li>
            <li>
              <i class="ph-thin ph-tumblr-logo"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
