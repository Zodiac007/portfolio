import React from "react";
import Logo from "./images/icons/logo.png";
import Twitter from "./images/icons/twitter.svg";
import Facebook from "./images/icons/facebook.svg";
import Linkedin from "./images/icons/linkedin.svg";
import Instagram from "./images/icons/instagram.svg";
import "../index.css";

function Nav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row nav-row">
          <div className="col-md-6">
            <a href="./">
              <img
                src={Logo}
                className="animate__animated logo animate__bounceInLeft animate__delay-2s"
                height="70"
                width="70"
                alt="list item 1"
              />
            </a>
          </div>
          <div className="col-md-6">
            <h6>Social Media</h6>

            <ul
              id="horizontal-list"
              className="animate__animated animate__bounceInRight animate__delay-2s"
            >
              <li>
                <a
                  href="https://www.facebook.com/harsh.dwivedi.92123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Facebook}
                    className="social-icon"
                    height="20"
                    width="20"
                    alt="list item 1"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/harsh007dwivedi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Twitter}
                    className="social-icon"
                    height="20"
                    width="20"
                    alt="list item 2"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/harsh-dwivedi-949035166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedin}
                    className="social-icon"
                    height="20"
                    width="20"
                    alt="list item 3"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/harsh777dwivedi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagram}
                    className="social-icon"
                    height="20"
                    width="20"
                    alt="list item 4"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
