import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css';

function BasicNavbar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#top" onClick={scrollTo('top')} className="d-flex align-items-center">
          <img src="/img/logos/logo.png" alt="Logo Todo Sellos" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#nosotros" onClick={scrollTo('nosotros')}>Nosotros</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#sellos" onClick={scrollTo('sellos')}>Sellos</NavDropdown.Item>
              <NavDropdown.Item href="#grabados" onClick={scrollTo('grabados')}>Grabados en madera</NavDropdown.Item>
              <NavDropdown.Item href="#placas" onClick={scrollTo('placas')}>Placas profesionales</NavDropdown.Item>
              <NavDropdown.Item href="#boligrafos" onClick={scrollTo('boligrafos')}>Bolígrafos</NavDropdown.Item>
              <NavDropdown.Item href="#llaveros" onClick={scrollTo('llaveros')}>Llaveros</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contacto" onClick={scrollTo('contacto')}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
