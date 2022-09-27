import React from "react"
import "../hojas-de-estilo/Works.css"
import BootstrapSlider from "./BootstrapSlider";


function Works() {
  return (
    <div  id="works" className="contenedor-works">
      <div className="contenedor-subtitulo">
        <h2 className="trabajos-sub-titulo">Proyectos Personales</h2>
      </div>
      <BootstrapSlider />
    </div>
  );
}
export default Works;