import React from "react";
import foto from "../assets/media/fotoCV.jpg";
import "../assets/css/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="container AboutMe">
        <div className="image">
          <figure>
            <img src={foto} alt="retrato de Lautaro Aguilar" />
          </figure>
        </div>
        <div className="texts">
          <div className="texts__titulo">
            <h2>
              Hola! Yo soy <span>Lautaro Aguilar</span>
            </h2>
          </div>
          <div className="texts__paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
              magnam dolor ratione obcaecati quae reiciendis nihil est
              aspernatur odit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dicta at magnam dolor ratione obcaecati quae
              reiciendis nihil est aspernatur odit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
              magnam dolor ratione obcaecati quae reiciendis nihil est
              aspernatur odit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dicta at magnam dolor ratione obcaecati quae
              reiciendis nihil est aspernatur odit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
