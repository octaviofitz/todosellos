import React from 'react';
import { Link } from "react-router-dom";

import './infoProductos.css';

function InfoProductos() {
  return (
    <section className='infoproductos'>
      <h2 className='titulo'>PRODUCTOS</h2>

      <div className='container'>

        <Link to="/categoria/sellos" className="card">
          <div>
            <img
              className="img"
              src="/img/Productos/Sellos/Automatico2000.webp"
              alt="Sellos"
            />
          </div>
          <p className='subtitulo'>SELLOS</p>
        </Link>

        <Link to="/categoria/placasprofesionales" className="card">
          <div>
            <img
              className="img"
              src="/img/Productos/PlacasProfesionales/BicapaPlateada.webp"
              alt="Placas profesionales"
            />
          </div>
          <p className='subtitulo'>PLACAS PROFESIONALES</p>
        </Link>


        <Link to="/categoria/grabados" className="card">
          <div>
            <img
              className="img"
              src="/img/Productos/Grabados/Mate.webp"
              alt="Grabados Todo sellos"
            />
          </div>
          <p className='subtitulo'>GRABADOS</p>
        </Link>

        
        <Link to="/categoria/boligrafos" className="card">
          <div>
            <img
              className="img"
              src="/img/Productos/Boligrafos/Andes.webp"
              alt="Bolígrafos"
            />
          </div>
          <p className='subtitulo'>BOLÍGRAFOS</p>
        </Link>

        <Link to="/categoria/llaveros" className="card">
          <div>
            <img
              className="img"
              src="/img/index/containerProductos/llavero.png"
              alt="Llaveros"
            />
          </div>
          <p className='subtitulo'>LLAVEROS</p>
        </Link>

      </div>
    </section>
  );
}

export default InfoProductos;
