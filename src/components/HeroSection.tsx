import React, { useState } from "react";
import Shortened from "../assets/Shortened_1.png";
import "../App.css";
import NavBar from "./NavBar";
import CollectedData from "./CollectedData";

const HeroSection: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="hero_section_container">
        <div className="shortener">
          <div>
            <img src={Shortened} alt="" />
            <p>
              Linkly is and efficient and easy-to-use URL shortening service
              that streamlines your online experience
            </p>
          </div>
          <div>
            <div className="label">
              <label htmlFor="url_entry">
                <input
                  type="text"
                  name=""
                  placeholder="Enter Link here"
                  id=""
                />
                <button>Shorten Now!</button>
              </label>
            </div>
            <div className="clipboard_toggle">
              <input type="checkbox" name="" id="toggle_switch" />
              <span>Auto Paste from Clipboard</span>
            </div>
            <p>
              You can create <span>05</span> more links. Register now to enjoy
              unlimited usage
            </p>
          </div>
        </div>
        <div className="history"></div>
      </div>
      <CollectedData />
    </>
  );
};

export default HeroSection;
