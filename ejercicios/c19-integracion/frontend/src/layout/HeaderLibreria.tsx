import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function HeaderLibreria() {
  return (
    <header>
      <Navbar expand="lg" className="custom-navbar py-3">
        <Container fluid className="px-4">

          {/* Logo */}
          <Navbar.Brand as={Link} to='/' className="d-flex align-items-center">
            <img
              src="logo.svg"
              width="60"
              height="60"
              className="logo-svg"
              alt="Logo"
            />
          </Navbar.Brand>
          <span className="text-white fw-bold fs-2 px-3 custom-logo">Librería Universe</span>


          {/* Tabs INICIO  */}
          <Nav className="ms-auto custom-nav-links fs-4">
            <Nav.Link as={Link} to='/' className="px-3">
              INICIO
            </Nav.Link>
            <Nav.Link as={Link} to='/catalogo' className="px-3">
              CATALOGO
            </Nav.Link>
            <Nav.Link as={Link} to='/libro/nuevo' className="px-3">
              NUEVO LIBRO
            </Nav.Link>
            <Nav.Link as={Link} to='/contacto' className="px-3">
              CONTACTO
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderLibreria;