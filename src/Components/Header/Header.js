import React from 'react';
import { Button, Nav} from 'react-bootstrap';

import './header.css';

function Header() {
    return (
        <section className='header'>
         <h1 className='titulo'>TODO SELLOS</h1>
         <h2 className='subtitle-banner'>Fábrica de sellos, grabados y cortes láser</h2>
         <a
         href="https://api.whatsapp.com/send?phone=+541150381057&text=Hola 😁, vengo de la página web. Quisiera realizar una consulta: "
         className="buttonConsulta"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Whatsapp"
         >
            <Button variant="secondary" size="lg" className='boton-latido'>
                 CONSULTAR
             </Button>
             </a>
        </section>
    );
}

export default Header;