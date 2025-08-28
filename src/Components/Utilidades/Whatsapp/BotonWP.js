import React from 'react';
import './botonWP.css'

function BotonWP() {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+541150381057&text=Hola 😁, vengo de la página web. Quisiera realizar una consulta: "
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default BotonWP;
