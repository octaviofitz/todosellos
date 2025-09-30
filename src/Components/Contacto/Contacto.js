//react
import * as React from 'react';
import { useRef, useState, useMemo } from 'react';
//styles
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// emailJS v4
import emailjs from '@emailjs/browser';
// sweetAlert2
import Swal from 'sweetalert2';

import './contacto.css';

const reEmail = /\S+@\S+\.\S+/;

const Contacto = () => {
  const formRef = useRef(null);

  // estados controlados
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // validaciones derivadas
  const errorName = name.trim().length === 0 || name.length > 45;
  const errorMail = !reEmail.test(mail);
  const errorTelefono = telefono.length < 6 || telefono.length > 25;
  const errorMensaje = mensaje.length < 20 || mensaje.length > 5000;

  const isDisabled = useMemo(
    () => errorName || errorMail || errorTelefono || errorMensaje,
    [errorName, errorMail, errorTelefono, errorMensaje]
  );

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isDisabled) return;

    try {
      await emailjs.sendForm(
        'service_w46i3kq',        // service ID
        'template_0fmn8p2',       // template ID
        formRef.current,
        { publicKey: 'fHpFnstpMqTJblTjE' }  // Public Key (SDK v4)
      );

      Swal.fire({
        title: '¡Su mensaje ha sido enviado con éxito!',
        text: 'En breve nos pondremos en contacto contigo',
        icon: 'success',
        timer: 6000,
        showConfirmButton: false
      });

      // limpiar
      formRef.current.reset();
      setName('');
      setMail('');
      setTelefono('');
      setMensaje('');
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'No pudimos enviar el mensaje',
        text: err?.text || 'Intentá nuevamente más tarde.',
        icon: 'error'
      });
    }
  };

  return (
    <section className="contacto" id="contacto">
      <div className="container-contacto">
        <div className="texto-contacto">
          <h3 className="contacto-title">CONTACTO</h3>
          <p className="contacto-data">
            En TODO SELLOS queremos ayudarte a materializar tus ideas. Completá el formulario y nuestro equipo se pondrá en contacto para responder tus consultas y ofrecerte la mejor atención personalizada.
          </p>
          <p className='contacto-data'>
            También podés encontrarnos en nuestro Instagram:&nbsp;
            <a
              href="https://www.instagram.com/todosellos438/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Todo Sellos <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </p>
        </div>

        <div className="formulario-contacto">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1 } }}
            noValidate
            autoComplete="off"
            id="formulario"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div>
              <TextField
                name="nombre"
                label="Nombre"
                fullWidth
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={name !== '' && errorName}
                helperText={name !== '' && errorName ? "Ingrese un nombre válido (máx. 45)" : ""}
              />

              <TextField
                name="mail"
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                type="email"
                style={{ backgroundColor: "#fff" }}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                error={mail !== '' && errorMail}
                helperText={mail !== '' && errorMail ? "Ingrese un correo electrónico válido" : ""}
              />

              <TextField
                name="telefono"
                label="Teléfono"
                type="tel"
                fullWidth
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
                value={telefono}
                onChange={(e) => setTelefono(e.target.value.replace(/[^\d+()\s-]/g, ''))}
                error={telefono !== '' && errorTelefono}
                helperText={telefono !== '' && errorTelefono ? "Ingrese un número de contacto válido" : ""}
              />

              <TextField
                name="msg"
                label="Mensaje"
                multiline
                fullWidth
                rows={4}
                style={{ backgroundColor: "#fff" }}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                error={mensaje !== '' && errorMensaje}
                helperText={mensaje !== '' && errorMensaje ? "Entre 20 y 5000 caracteres" : ""}
              />

              <div className="boton-enviar">
                <Button
                  variant="secondary"
                  size="lg"
                  className="button-contacto"
                  type="submit"
                  disabled={isDisabled}
                >
                  Enviar mensaje
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
