import { useParams, useNavigate } from "react-router-dom";
import { useLibro } from "../context/LibroContext";
import { Container, Row, Col, Card, Badge, Button, Spinner } from "react-bootstrap";

function LibroDetalle() {
    const { id } = useParams<{ id: string }>();
    const libroId = Number(id);
    const navigate = useNavigate();

    const { getLibroById, loading, errorApi } = useLibro();
    const libro = getLibroById(libroId);

    if (!id || isNaN(libroId)) {
        return <h2>ID de libro inválido</h2>;
    }

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" role="status" variant="light">
                    <span className="visually-hidden">Cargando libros...</span>
                </Spinner>
            </div>
        );
    }

    if (errorApi) {
        return (
            <div className="text-center text-danger py-5">Error: {errorApi}</div>
        );
    }

    if (!libro) {
        return <h2>Libro no encontrado</h2>;
    }

    return (
        <Container className="py-5">

            {/*Boton de retroceso*/}
            <Button variant="outline-light" onClick={() => navigate(-1)} className="mb-4">
                &larr; Volver
            </Button>

            {/*Tarjeta principal*/}
            <Card className="shadow-lg border-0 rounded-5 overflow-hidden">
                <Row className="g-0">

                    {/*COLUMNA IZQUIERDA*/}
                    <Col md={5} lg={4} className="bg-light d-flex align-items-center justify-content-center p-4">
                        <Card.Img
                            src={libro.imgSrc
                                ? (libro.imgSrc.startsWith('http') ? libro.imgSrc : `/${libro.imgSrc}`)
                                : '/logo.svg'
                            }
                            alt={`Portada de ${libro.titulo}`}
                            className="img-fluid rounded shadow-lg"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </Col>

                    {/*COLUMNA DERECHA*/}
                    <Col md={7} lg={8}>
                        <Card.Body className="p-4 p-lg-5 d-flex flex-column h-100">

                            {/*Titulo y autor*/}
                            <div className="mb-4">
                                <h1 className="text-info fs-1 fw-bold text-shadow">{libro.titulo}</h1>
                                <p className="text-info fs-4 fw-bold">
                                    Por {libro.autor.nombreApellido} <span className="fs-5 fw-normal">({libro.autor.nacionalidad})</span>
                                </p>
                            </div>

                            {/*Categorias*/}
                            <div className="mb-4">
                                <h6 className="fw-bold text-uppercase text-secondary mb-2">Categorías</h6>
                                {libro.categorias && libro.categorias.length > 0 ? (
                                    libro.categorias.map(cat => (
                                        <Badge bg="primary" className="me-2 mb-2 fs-6 rounded-pill px-3 py-2" key={cat.id}>
                                            {cat.nombre}
                                        </Badge>
                                    ))
                                ) : (
                                    <span className="text-muted fst-italic">Sin categorías</span>
                                )}
                            </div>

                            {/*Disponibilidad*/}
                            <div className="mb-5">
                                <h6 className="fw-bold text-uppercase text-secondary mb-2">Disponibilidad</h6>
                                {libro.disponible ? (
                                    <Badge bg="success" className="fs-6 rounded-pill px-3 py-2">En stock</Badge>
                                ) : (
                                    <Badge bg="danger" className="fs-6 rounded-pill px-3 py-2">Agotado</Badge>
                                )}
                            </div>

                            {/*Precio*/}
                            <div className="mt-auto pt-4 border-top d-flex justify-content-between align-items-center">
                                <div>
                                    <p className="fs-4 fw-bold">Precio</p>
                                    <h1 className="text-success fw-bold mb-0">${libro.precio.toLocaleString()}</h1>
                                </div>
                            </div>

                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default LibroDetalle;