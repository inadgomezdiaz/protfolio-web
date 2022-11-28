import Carousel from 'react-bootstrap/Carousel';
import Proyecto from "./Proyecto"
import video from "../media/video.mp4"
import videoTG from "../media/video-tg.mp4"
import videoclc from "../media/video-clc.mp4"

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
          nombre="prueba"
          demo="youtube.com" video={video}
          descripcion="descripciond video 2" />
      </Carousel.Item>
      <Carousel.Item>
        <Proyecto
          nombre="prueba"
          demo="https://inadgomezdiaz.github.io/calculadora-react/" github="https://github.com/inadgomezdiaz/calculadora-react" video={videoclc}
          descripcion="Calculadora hecha con react.js (React.js)" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BootsrapSlider;