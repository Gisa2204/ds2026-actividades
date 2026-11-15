import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export function SinPermiso() {
  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Alert variant="warning" className="shadow-sm p-4 text-center">
            <Alert.Heading className="mb-3 text-danger">Acceso Denegado</Alert.Heading>
            
            <div className="mb-4">
              <p className="mb-1 text-info">
                <b>No tenés los permisos necesarios para acceder a esta página.</b>
              </p>
            </div>
            
            <Link to="/catalogo" className="btn btn-primary px-4">
              Volver al catálogo
            </Link>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}