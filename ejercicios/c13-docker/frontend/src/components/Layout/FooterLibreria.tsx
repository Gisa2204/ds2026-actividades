import { Container, Row, Col } from 'react-bootstrap';
import '../../css/Footer.css';
import { Link } from 'react-router-dom';

function FooterLibreria() {
    return (
        <footer className="footer-container">
            <Container>

                <Row className="pt-3">
                    <Col md={6}>
                        <h5 className="footer-brand">Librería Universe 🪐</h5>
                        <p className="footer-text">
                            Explora miles de títulos en nuestra colección exclusiva.<br></br>
                            Tu viaje a través de las páginas comienza aquí.
                        </p>
                    </Col>

                    <Col md={3}>
                        <h6 className="footer-heading">Navegación</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/catalogo">Catálogo</Link></li>
                            <li><Link to="/">Contacto</Link></li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6 className="footer-heading">Síguenos</h6>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#twitter">X (Twitter)</a></li>
                            <li><a href="#facebook">Facebook</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center py-3 footer-bottom-border">
                        <p className="mb-0 footer-copyright">
                            &copy; {new Date().getFullYear()} Librería Universe.
                        </p>
                    </Col>
                </Row>
                
            </Container>
        </footer>
    );
}

export default FooterLibreria;