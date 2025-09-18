// src/Components/NuestrosClientes/NoTransitionExample.jsx
import Carousel from 'react-bootstrap/Carousel';
import './nuestrosClientes.css';

function NoTransitionExample() {
  return (
    <section className='ClientesMobile'>
      <div>
        <h3 className='titulo'>Clientes satisfechos</h3>
      </div>

      <Carousel slide={false} className='carrusel'>
        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/MunicipioLomas.png" alt="Municipio de Lomas" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/Arca.png" alt="Arca" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/Banfield.png" alt="Banfield" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/Unla.png" alt="UNLa" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/Anses.svg" alt="UNLa" />
          </div>
        </Carousel.Item>

       

        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/Unab.png" alt="UNLa" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="slide-frame">
            <img className="slide-img" src="/img/index/clientes/LosAndes.png" alt="UNLa" />
          </div>
        </Carousel.Item>

       

      </Carousel>
    </section>
  );
}
export default NoTransitionExample;
