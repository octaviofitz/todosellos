import React from 'react';

import './presentacion.css';

function Presentacion() {
    return (
        <section className='presentacion'> 
        <h3 className='titulo'>Nosotros</h3>
            <p className='texto'>TODO SELLOS es una empresa con más de 30 años de experiencia en la fabricación de sellos, placas, grabados y cortes láser. Brindamos soluciones de calidad a particulares, empresas, emprendimientos y proveedores del rubro.</p>
            <p className='texto'>Nuestra fábrica cuenta con maquinaria de última tecnología y un equipo altamente capacitado, lo que nos permite garantizar trabajos precisos, duraderos y de excelente terminación.</p>
            <p className='texto'>Te esperamos en nuestro local de Mariano Boedo 438, Lomas de Zamora, donde encontrarás asesoramiento personalizado y la mejor atención.</p>
        </section>
    );
}

export default Presentacion;