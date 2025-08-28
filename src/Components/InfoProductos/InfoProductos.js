import React from 'react';

import './infoProductos.css';

function InfoProductos() {
    return (
        <section className='infoproductos'>
            <h2 className='titulo'>PRODUCTOS</h2>

            <div className='articulo'>
                <img src='/img/index/containerProductos/sellos.png' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>SELLOS</p>
                         </div>

            <div className='articulo'>
                <img src='/img/index/containerProductos/grabados.jpg' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>GRABADOS EN MADERA</p>
                         </div>

                         <div className='articulo'>
                <img src='/img/index/containerProductos/boligrafo.webp' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>PLACAS PROFESIONALES</p>
                         </div>


                         <div className='articulo'>
                <img src='/img/index/containerProductos/boligrafo.webp' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>BOLÍGRAFOS</p>
                         </div>

                         <div className='articulo'>
                <img src='/img/index/containerProductos/boligrafo.webp' alt='Todo Sellos boligrafos' className='img'/>
                    <p className='subtitulo'>LLAVEROS</p>
                         </div>
           
        </section> 
    );
}

export default InfoProductos;