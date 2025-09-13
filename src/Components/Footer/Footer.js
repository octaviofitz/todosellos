import React from 'react';

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div>
            <img src='/img/logos/logo.png' alt='Logo Todo Sellos' className='logo' />
            </div>
           <div>
           <p className='texto'>Mariano Boedo 438, Lomas de Zamora 📍</p>
            <p className='texto'>Lunes a viernes de 9 a 17HS ⏱️</p>
            <p className='texto'>Envíos a todo el país 📦</p>
           </div>
          
        </footer>
    );
}

export default Footer;