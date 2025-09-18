import React from 'react';
import './clientesDesktop.css';

function ClientesDesktop() {
    return (
        <section className='ClientesDesktop'>
            <h2 className='titulo'>CLIENTES SATISFECHOS</h2>
            <div className='logos'>
                <img src='/img/index/clientes/MunicipioLomas.webp' alt='Municipio de Lomas' className='img' />
                <img src='/img/index/clientes/Arca.webp' alt='Arca' className='img' />
                <img src='/img/index/clientes/Banfield.webp' alt='Banfield' className='img' />
                <img src='/img/index/clientes/Unla.webp' alt='UNLa' className='img' />
                <img src='/img/index/clientes/Anses.webp' alt='Anses' className='img' />
                <img src='/img/index/clientes/Unab.webp' alt='UNAB' className='img' />
                <img src='/img/index/clientes/LosAndes.webp' alt='Los Andes' className='img' />
            </div>
        </section>
    );
}

export default ClientesDesktop;
