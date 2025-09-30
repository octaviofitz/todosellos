import React from 'react';

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div>
            <img src='/img/logos/logo.png' alt='Logo Todo Sellos' className='logo' />
            </div>
           <div className='datos'>
           <p className="redes">
                <a 
                    href="https://www.instagram.com/todosellos438/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Todo Sellos  <i className="fab fa-instagram" aria-hidden="true"> </i>
                </a>
                </p>
                <p className="texto">
                  <a 
                    href="https://maps.app.goo.gl/d17Pv8L346W7RENw9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Mariano Boedo 438, Lomas de Zamora 📍
                  </a>
                  </p>  
          <p className='texto'>Lunes a viernes de 9 a 17HS ⏱️</p>
           </div>
          
        </footer>
    );
}

export default Footer;