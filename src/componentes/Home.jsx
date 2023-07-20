import React from "react";
import "../hojas-de-estilo/Home.css";
import image from "../media/icon.png" 
import image2 from "../media/icon2.png" 
import image3 from "../media/icon3.png" 

function Home() {
  return (
    <div id="home" className="home-contenedor" >
      <div className="home-contenedor-texto">
        <h1 className="home-texto-cabezera">
          Software Developer
        </h1>
        <p className="home-texto-intro">
          Soy Daniel Gomez y me dedico al Desarrollo de software
        </p>
      </div>
      <div className="home-icon-contenedor">
        <img src={image2}alt="imagen de ilustracion" className="home-icon" />
        <img src={image}alt="imagen de ilustracion 2" className="home-icon" />
        <img src={image3}alt="imagen de ilustracion 3" className="home-icon" />
      </div>
    </div>
  )
};

export default Home;
