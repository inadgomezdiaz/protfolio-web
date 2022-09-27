import React from "react"
import "../hojas-de-estilo/Proyecto.css"

function Proyecto({ nombre, descripcion, github, demo, video }) {
  return (
    <div className="contenedor-proyecto">
      <video className="proyecto-preview" alt={`video de ${nombre}`} src={video} loop muted autoPlay>
      </video>
      <p className="proyecto-descripcion">{descripcion}
      </p>
      <div className="contenedor-links">
        <a href={github} target="_blank">Codigo</a>
        <a href={demo} target="_blank" >Demo</a>
      </div>
    </div>
  );
}

export default Proyecto;