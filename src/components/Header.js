import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/"><h1>Lautaro Aguilar</h1></Link>
        <div className="nav">
          <ul>
            <li>
              <Link to="/AboutMe">About me</Link>
            </li>
            <li>
              <Link to="/Works">Works</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
          </ul>
        </div>
        <button className="cta">
          <a href="">Contact me </a> 
        </button>
      </div>
    </>
  );
}
