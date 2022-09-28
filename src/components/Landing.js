import React from "react";
import video from "../assets/media/video.mp4";

import "../assets/css/Landing.css";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <div className="Landing">
        <video src={video} className="video" autoPlay loop></video>
        <div className="Landing-texts">
          <h2>Hola, soy el perrito de Lautaro Aguilar</h2>
          <p>Frontend Developer | Designer | Creative</p>
          <Link to="/AboutMe">
            <h4>Ver más</h4>
          </Link>
        </div>
      </div>
    </>
  );
}
