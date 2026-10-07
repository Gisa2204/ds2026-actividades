import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HeaderLibreria() {
  const { tieneRol } = useAuth();

  return (
    <header className="sticky-top">
      <Navbar expand="lg" className="custom-navbar py-3" variant="dark">
        <Container fluid className="px-4 position-relative">

          {/* Logo */}
          <Navbar.Brand as={Link} to='/' className="d-flex align-items-center m-0">
            <img
              src="/logo.svg" 
              width="60"
              height="60"
              className="logo-svg"
              alt="Logo"
            />
            <span className="text-white fw-bold fs-2 px-3 custom-logo">Librería Universe</span>
          </Navbar.Brand>

          {tieneRol('ADMIN') && (
            <div className="position-absolute top-50 start-50 translate-middle d-none d-xl-block">
              <span className="text-white fs-4 fw-bold border border-white rounded-pill px-4 py-1 admin-badge">
                MODO ADMINISTRACIÓN
              </span>
            </div>
          )}

          <Navbar.Toggle aria-controls="navbar-collapse-menu" />

          <Navbar.Collapse id="navbar-collapse-menu">
            <Nav className="ms-auto custom-nav-links fs-4 mt-3 mt-lg-0">
              <Nav.Link as={Link} to='/' className="px-3">
                INICIO
              </Nav.Link>
              <Nav.Link as={Link} to='/catalogo' className="px-3">
                CATALOGO
              </Nav.Link>
              <Nav.Link as={Link} to='/contacto' className="px-3">
                CONTACTO
              </Nav.Link>

              {tieneRol('ADMIN') && (
                <Nav.Link as={Link} to='/libro/nuevo' className="px-3">
                  NUEVO LIBRO
                </Nav.Link>
              )}

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderLibreria;