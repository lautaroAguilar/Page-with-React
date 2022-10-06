import React from "react";
import "../assets/css/Works.css";
import Slider from "./Carousel/Slider";

export default function Works() {
  return (
    <>
      <div className="Container">
        <div className="Texts">
          <h3 className="Texts__title">Estos son algunos de mis proyectos</h3>
          <p className="Texts__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure voluptatum voluptatibus vel laboriosam deserunt repudiandae perferendis sequi excepturi alias eum, iste, porro quo incidunt neque facilis nostrum facere qui?
          Quos nemo architecto, et molestias vero animi sapiente mollitia sed explicabo aspernatur ab aliquid iste ipsam impedit illo? Dolor ducimus aspernatur omnis in quas ab laboriosam! Aperiam magnam unde perspiciatis.
          Adipisci ea accusamus quaerat corporis atque modi dolore numquam enim laboriosam animi, quas veniam dignissimos architecto at soluta ipsa sequi voluptas natus quae aperiam tempore nisi a ipsum consequuntur? Sit.0</p>
        </div>
        <Slider></Slider>
      </div>
    </>
  );
}
