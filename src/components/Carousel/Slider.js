import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import img1 from "../../assets/media/codigo.jpg";
import img2 from "../../assets/media/setup.jpg";
import img3 from "../../assets/media/blanco.jpg";
import "../../assets/css/Slider.css";

export default function Slider() {
  return (
    <>
      <div className="Carousel__container">
        <Carousel plugins={["arrows",'infinite', 'centered' ]} /* itemWidth={200} offset={20} animationSpeed={300} */>
          <div className="Carousel__container--img">
            <img className="Carousel__img" src={img1} alt="proyecto 1" />
          </div>
          <div className="Carousel__container--img">
            <img className="Carousel__img" src={img2} alt="proyecto 2" />
          </div>
          <div className="Carousel__container--img">
            <img className="Carousel__img" src={img3} alt="proyecto 3" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
