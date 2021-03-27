import React from "react";
import BgImage from "./images/img-bg.svg";
import MyImage from "./images/My.png";
import YCircle from "./images/yellow-circle.svg";
import OCircle from "./images/orange-circle.svg";
// import BPattern from "./images/blue-pattern.svg";
import Programme from "./images/programming.svg";
import Design from "./images/graphic-design.svg";
// ICONS
import AI from "./images/icons/ai.svg";
import PS from "./images/icons/ps.svg";
import XD from "./images/icons/xd.svg";
import ReactIcon from "./images/icons/react.svg";
import HTML from "./images/icons/html.svg";
import CSS from "./images/icons/css.svg";
import JS from "./images/icons/js.svg";

// Contact Icons
import Email from "./images/icons/email.svg";
import Call from "./images/icons/phone-call.svg";

import "../index.css";

function HeroSection(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="name-div">
          <h1 className="name animate__animated animate__bounceInLeft animate__slow">
            Harsh Dwivedi
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 p-1 left-div">
            <div className="left-content-div">
              <div>
                <img src={YCircle} className="y-circle" alt="" />
              </div>
              <div className="programme-div">
                <div className="programme-img-div">
                  <img src={Programme} className="programme" alt="" />
                </div>
                <h5 className="programme-heading">A Developer</h5>
                <a
                  href="https://github.com/Zodiac007"
                  className="btn btn-secondary p-btn"
                  target="_blank"
                >
                  Development Work
                </a>
              </div>
              <div className="email-div">
                <img src={Email} className="email" alt="" />
                <a href="#">
                  <p>harsh007dwivedi@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 p-2 center-div">
            <div className="center-img-div">
              <img src={BgImage} className="bg-image" alt="" />
              <img src={MyImage} className="my-image" alt="" />
              {/* Icons */}
              <img src={HTML} className="html" alt="" />
              <img src={CSS} className="css" alt="" />
              <img src={JS} className="js" alt="" />
              <img src={ReactIcon} className="react" alt="" />
              <img src={AI} className="ai" alt="" />
              <img src={PS} className="ps" alt="" />
              <img src={XD} className="xd" alt="" />
            </div>

            <div className="hidden-div">
              <img src={Email} className="email" alt="" />
              <a href="#">
                <p>harsh007dwivedi@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-3 right-div">
            <div className="right-content-div">
              <div>
                <img src={OCircle} className="o-circle" alt="" />
              </div>
              <div className="design-div">
                <div className="design-img-div">
                  <img src={Design} className="design" alt="" />
                </div>
                <h5 className="design-heading">A Designer</h5>
                <a
                  href="https://drive.google.com/drive/folders/1P9uYbyEnH1RjXLh62_5Qi4aFOEG5qzHK?usp=sharing"
                  className="btn btn-secondary d-btn"
                  target="_blank"
                >
                  Designing Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
