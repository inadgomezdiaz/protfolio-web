import React from "react"
import imagen from "../media/imagen-desc.jpg"
import "../hojas-de-estilo/AboutMe.css"

function AboutMe() {
  return (
    <article id="aboutMe" className="contenedor-about-me">
      <div className="contenedor-subtitulo">
        <h2>About me</h2>
      </div>
      <div className="contenedor-descripcion">
        <div cassName="contenedor-imagen">
          <img src={imagen} alt="mi imagen" className="imagen" />
        </div>
        <div className="contenedor-texto">
          <p className="descripcion-about-me">
            Me llamo Daniel Gomez, estudie programacion en la UNSAM. Empecé programando microcontroladores en secundaria (Tecnica 1 Vte López) pero luego decidí enfocarme en el desarrollo( tanto web como de software) que es lo que en verdad me apasiona
          </p>
        </div>
      </div>
    </article>
  );
}
export default AboutMe;
