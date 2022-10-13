import React from "react";
import html from "../assets/media/html1.png";
import css from "../assets/media/css.png";
import javascript from "../assets/media/javascript.png";
import git from "../assets/media/git.png";
import react from "../assets/media/react.png";
import "../assets/css/Skills.css";

export default function Skills() {
  return (
    <>
      <div className="container">
        <div className="container__bar">
          <figure>
            <img className="img__bar" src={html} alt="Logo de HTML" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            possimus, recusandae quam vero quasi tempora consequatur perferendis
            magni blanditiis sapiente. nam illo maiores neque dolore at
            recusandae animi sequi hic, aliquam necessitatibus odit deleniti
            quae! Aut nobis, cumque asperiores possimus minima porro impedit
            quos. Unde, quisquam?
          </p>
        </div>
        <div className="container__bar">
          <figure>
            <img className="img__bar" src={css} alt="Logo de CSS" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            possimus, recusandae quam vero quasi tempora consequatur perferendis
            magni blanditiis sapiente. nam illo maiores neque dolore at
            recusandae animi sequi hic, aliquam necessitatibus odit deleniti
            quae! Aut nobis, cumque asperiores possimus minima porro impedit
            quos. Unde, quisquam?
          </p>
        </div>
        <div className="container__bar">
          <figure>
            <img
              className="img__bar"
              src={javascript}
              alt="Logo de Javascript"
            />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            possimus, recusandae quam vero quasi tempora consequatur perferendis
            magni blanditiis sapiente. nam illo maiores neque dolore at
            recusandae animi sequi hic, aliquam necessitatibus odit deleniti
            quae! Aut nobis, cumque asperiores possimus minima porro impedit
            quos. Unde, quisquam?
          </p>
        </div>
        <div className="container__bar">
          <figure>
            <img className="img__bar" src={git} alt="Logo de Git" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            possimus, recusandae quam vero quasi tempora consequatur perferendis
            magni blanditiis sapiente. nam illo maiores neque dolore at
            recusandae animi sequi hic, aliquam necessitatibus odit deleniti
            quae! Aut nobis, cumque asperiores possimus minima porro impedit
            quos. Unde, quisquam?
          </p>
        </div>
        <div className="container__bar">
          <figure>
            <img className="img__bar" src={react} alt="Logo de React" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            possimus, recusandae quam vero quasi tempora consequatur perferendis
            magni blanditiis sapiente. nam illo maiores neque dolore at
            recusandae animi sequi hic, aliquam necessitatibus odit deleniti
            quae! Aut nobis, cumque asperiores possimus minima porro impedit
            quos. Unde, quisquam?
          </p>
        </div>
        <div className="container__objectives">

          <h2>Objetivos</h2>

          <div className="objectives__texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              nam illo maiores neque dolore at recusandae animi sequi hic,
              aliquam necessitatibus odit deleniti quae! Aut nobis, cumque
              asperiores possimus minima porro impedit quos. Unde, quisquam?
            </p>

            <div className="objectives__list">
              <ul>
                <li className="list">- Lorem, ipsum dolor.</li>
                <li className="list">- Lorem, ipsum.</li>
                <li className="list">- Lorem ipsum dolor sit.</li>
                <li className="list">- Lorem ipsum dolor.</li>
                <li className="list">- Lorem dolor sit.</li>
              </ul>
            </div>

          </div>
          
        </div>

      </div>
    </>
  );
}
