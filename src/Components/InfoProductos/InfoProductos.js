import React from 'react';
import { Link } from "react-router-dom";


import './infoProductos.css';

function InfoProductos() {
    return (
        <section className='infoproductos'>
            <h2 className='titulo'>PRODUCTOS</h2>

            <div className='articulo'>
            <Link to="/categoria/sellos">
                <img src='/img/index/containerProductos/sellos.png' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>SELLOS</p>
                    </Link>
                         </div>

            <div className='articulo'>
             <Link to="/categoria/grabadosenmadera">
                <img src='/img/index/containerProductos/grabados.png' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>GRABADOS EN MADERA</p>
                    </Link>
                         </div>

                         <div className='articulo'>
                            <Link to="/categoria/placasprofesionales">
                              <img src='/img/index/containerProductos/placa.png' alt='Todo Sellos boligrafos' className='img'/>
                                 <p className='subtitulo'>PLACAS PROFESIONALES</p>
                                 </Link>
                                      </div>


                         <div className='articulo'>
                         <Link to="/categoria/boligrafos">
                <img src='/img/index/containerProductos/boligrafo.webp' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>BOLÍGRAFOS</p>
                    </Link>
                         </div>

                         <div className='articulo'>
                         <Link to="/categoria/llaveros">
                <img src='/img/index/containerProductos/llavero.png' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>LLAVEROS</p>
                    </Link>
                         </div>
           
        </section> 
    );
}

export default InfoProductos;