import Carousel from 'react-bootstrap/Carousel';
import Proyecto from "./Proyecto"
import videoCntr from "../media/video-cntr.mp4"
import videoTG from "../media/video-tg.mp4"
import videoClc from "../media/video-clc.mp4"

function BootsrapSlider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <Proyecto
          nombre="Typing Game"
          demo="https://inadgomezdiaz.github.io/typing-game/" github="https://github.com/inadgomezdiaz/typing-game" video={videoTG}
          descripcion="juego que mide el tiempo que tardas en copiar una frase (JS,CSS,HTML)" />
      </Carousel.Item>
      <Carousel.Item>
        <Proyecto
          nombre="Contador de clicks"
          demo="https://inadgomezdiaz.github.io/clicks-counter/" github="https://github.com/inadgomezdiaz/clicks-counter" video={videoCntr}
          descripcion="contador de clicks hecho con componentes de clase de react.js (React.js)" />
      </Carousel.Item>
      <Carousel.Item>
        <Proyecto
          nombre="Calculadora react"
          demo="https://inadgomezdiaz.github.io/calculadora-react/" github="https://github.com/inadgomezdiaz/calculadora-react" video={videoClc}
          descripcion="Calculadora hecha con react.js (React.js)" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BootsrapSlider;