import Carousel from 'react-bootstrap/Carousel';
import Proyecto from "./Proyecto"
import video from "../media/video.mp4"

function BootsrapSlider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <Proyecto
          nombre="prueba"
          demo="youtube.com" github="https//google.com" video={video}
          descripcion="descripciond video 1" />
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
          demo="youtube.com" video={video}
          descripcion="descripciond video 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BootsrapSlider;