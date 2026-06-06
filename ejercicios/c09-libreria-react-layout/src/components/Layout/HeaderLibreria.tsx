import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/Header.css';
import { Link } from 'react-router-dom';

function HeaderLibreria() {
  return (
    <header>
      <Navbar expand="lg" className="custom-navbar py-3">
        <Container fluid className="px-4">

          {/* Logo */}
          <Link to='/'>
            <Navbar.Brand className="d-flex align-items-center">
              <img
                src="logo.svg"
                width="60"
                height="60"
                className="logo-svg"
                alt="Logo"
              />
            </Navbar.Brand>
          </Link>
          <span className="text-white fw-bold fs-2 px-3 custom-logo">Librería Universe</span>


          {/* Tabs INICIO  */}
          <Nav className="ms-auto custom-nav-links fs-4">
            <Nav.Link className="px-3">
              <Link to='/'>INICIO</Link>
            </Nav.Link>
            <Nav.Link className="px-3">
              <Link to='/catalogo'>CATALOGO</Link>
            </Nav.Link>
            <Nav.Link className="px-3">
              <Link to='/'>CONTACTO</Link>
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderLibreria;