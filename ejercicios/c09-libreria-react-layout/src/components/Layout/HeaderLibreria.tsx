import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/Header.css';

function HeaderLibreria() {
  return (
    <header>
      <Navbar expand="lg" className="custom-navbar py-3">
        <Container fluid className="px-4">

          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="logo.svg"
              width="60"
              height="60"
              className="logo-svg"
              alt="Logo"
            />
            <span className="text-white fw-bold fs-2 px-3 custom-logo">Librería Universe</span>
          </Navbar.Brand>

          {/* Tabs INICIO  */}
          <Nav className="ms-auto custom-nav-links fs-4">
            <Nav.Link className="px-3">INICIO</Nav.Link>
            <Nav.Link className="px-3">CATALOGO</Nav.Link>
            <Nav.Link className="px-3">CONTACTO</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderLibreria;