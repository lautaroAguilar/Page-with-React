import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer__map">
          <ul>
            <li>
              <Link to="/AboutMe">About Me</Link>
            </li>
            <li>
              <Link to="/Works">Works</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
          </ul>
        </div>

        <div className="Footer__contact">
          <div className="Footer__contact--title">
            <h4>Design by Lautaro</h4>
          </div>
          <Link to="https://twitter.com" target="_blank">
            <i className="fi fi-brands-twitter"></i>
          </Link>
          <Link to="https://facebook.com" target="_blank">
            <i className="fi fi-brands-facebook"></i>
          </Link>
          <Link to="https://ar.linkedin.com" target="_blank">
            <i className="fi fi-brands-linkedin"></i>
          </Link>
          <Link to="https://behance.net" target="_blank">
            <i className="fi fi-brands-behance"></i>
          </Link>
        </div>
        <div className="Footer__texts">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt
            voluptas at, provident error quisquam.
          </p>
        </div>
        <div className="Footer__copy">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
}
