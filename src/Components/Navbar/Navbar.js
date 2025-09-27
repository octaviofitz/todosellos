import React, { useState } from 'react'; // 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import CartModal from "../Productos/CartModal/CartModal";

import './navbar.css';

function BasicNavbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Estado para el modal
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  // Nuevo: estado controlado del colapso del Navbar
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Utilidad: scroll robusto con reintentos hasta que el nodo exista
  const scrollWhenReady = (id) => {
    let attempts = 0;
    const maxAttempts = 60; // ~1 segundo si corre a 60fps

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // reflejamos el hash en la URL
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', `/#${id}`);
        } else {
          window.location.hash = `#${id}`;
        }
      } else if (attempts < maxAttempts) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  };

  // Ir a sección desde cualquier ruta
  const goToSection = (id) => (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // 1) navegamos a la home
      navigate("/", { replace: false });
      // 2) intentamos scrollear cuando el DOM de Home esté listo
      scrollWhenReady(id);
    } else {
      // Ya en home: scrolleo directo
      scrollWhenReady(id);
    }

    setExpanded(false); // <--- cierra el menú en mobile
  };

  // Pequeña mejora: ícono del carrito como variable
  const CartIcon = (
    <div className="cart-wrapper" onClick={handleShowCart} style={{ cursor: 'pointer' }}>
      <span className="cart-emoji">🛒</span>
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
    </div>
  );

  return (
    <>
      {/* Agregamos expanded y onToggle para controlar el estado */}
      <Navbar
        expand="lg"
        className="navbar"
        collapseOnSelect
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container className="d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center"
            onClick={() => setExpanded(false)}
          >
            <img src="/img/logos/logo.png" alt="Logo Todo Sellos" className="logo" />
          </Navbar.Brand>

          {/* MOBILE: carrito emoji + hamburguesa */}
          <div className="d-lg-none d-flex align-items-center gap-2 mobile-actions">
            {CartIcon}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          {/* NAVS + carrito en DESKTOP */}
          <Navbar.Collapse id="basic-navbar-nav" className="text-lg-end">
            <Nav className="ms-auto">
              {/* Usamos onClick + navigate manual para controlar el scroll */}
              <Nav.Link as={Link} to="/" onClick={goToSection('nosotros')}>
                Nosotros
              </Nav.Link>

              <NavDropdown title="Productos" id="basic-nav-dropdown">
                {/* IMPORTANTE: cerrar el menú al clickear un item */}
                <NavDropdown.Item as={Link} to="/categoria/sellos" onClick={() => setExpanded(false)}>
                  Sellos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/grabados" onClick={() => setExpanded(false)}>
                  Grabados 
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/placasprofesionales" onClick={() => setExpanded(false)}>
                  Placas profesionales
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/boligrafos" onClick={() => setExpanded(false)}>
                  Bolígrafos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/llaveros" onClick={() => setExpanded(false)}>
                  Llaveros
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/" onClick={goToSection('contacto')}>
                Contacto
              </Nav.Link>

              {/* Carrito emoji DESKTOP */}
              <div className="d-none d-lg-flex align-items-center">
                {CartIcon}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal del carrito */}
      <CartModal show={showCart} handleClose={handleCloseCart} />
    </>
  );
}

export default BasicNavbar;
