import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import CartModal from "../Productos/CartModal/CartModal";

import './navbar.css';

function BasicNavbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar" collapseOnSelect>
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="/img/logos/logo.png" alt="Logo Todo Sellos" className="logo" />
        </Navbar.Brand>

        {/* Carrito primero, luego Toggle en MOBILE */}
        <div className="d-flex align-items-center">
          <div className="d-lg-none position-relative me-2" style={{ cursor: "pointer" }}>
            <CartModal iconOnly />
            {totalItems > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '0.7rem',
                }}
              >
                {totalItems}
              </span>
            )}
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-lg-start w-100 w-lg-auto align-items-center">
            <Nav.Link href="#nosotros" onClick={scrollTo('nosotros')}>Nosotros</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/sellos">Sellos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/grabados">Grabados en madera</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/placas">Placas profesionales</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/boligrafos">Bolígrafos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/llaveros">Llaveros</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contacto" onClick={scrollTo('contacto')}>Contacto</Nav.Link>

            {/* Ícono carrito DESKTOP */}
            <div className="d-none d-lg-flex ms-auto position-relative" style={{ cursor: "pointer" }}>
              <CartModal iconOnly />
              {totalItems > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '0.8rem',
                  }}
                >
                  {totalItems}
                </span>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
