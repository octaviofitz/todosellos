import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <img src='/img/logos/logo.png' alt='Logo Todo Sellos' className='logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sellos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Grabados
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;