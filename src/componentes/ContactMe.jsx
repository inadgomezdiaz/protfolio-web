import React from "react";
import FormContacto from "./FormContacto.jsx";
import "../hojas-de-estilo/ContactMe.css";
import { AiFillLinkedin } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";

function ContactMe() {
  return (
    <div id="contactMe" className="contenedor-contactos">
      <h2>Contactame</h2>
      <div className="contenedor-formulario-contacto"><FormContacto /></div>
        <ul className="contenedor-otros-contactos" >
          <li><AiFillLinkedin fill="black"/><a href="https://www.linkedin.com/in/daniel-gomez-diaz-29759b235/"> linkedin</a></li>
          <li><VscGithubInverted fill="black"/><a href="https://github.com/inadgomezdiaz"> Github</a></li>
        </ul>
    </div>
  );
}
export default ContactMe;