import { Container, Row, Col, Card } from 'react-bootstrap';

function Contacto() {
    return (
        <Container className="py-5">

            {/*Contacto*/}
            <div className="mb-5 text-center">
                <h1 className="mb-4">Contacto</h1>
                <Card
                    className="shadow-lg border-0 rounded-4 mx-auto"
                    style={{
                        backgroundColor: 'var(--color-primario-light-medium)',
                        color: 'var(--color-interface)',
                        maxWidth: '600px'
                    }}
                >
                    <Card.Body className="p-4">
                        <h2 className="mb-3">Gino Salvagnini</h2>
                        <p className="fs-5 mb-2">
                            <strong>Email: </strong>
                            <a
                                href="mailto:ginosalvagnini12@gmail.com"
                                style={{ color: 'var(--color-secundario-light)', textDecoration: 'none' }}
                            >
                                ginosalvagnini12@gmail.com
                            </a>
                        </p>
                        <p className="fs-5 mb-2">
                            <strong>Repositorio: </strong>
                            <a
                                href="https://github.com/Gisa2204/ds2026-actividades"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--color-secundario-light)' }}
                            >
                                ds2026 (GitHub)
                            </a>
                        </p>
                        <p className="fs-5 mb-2">
                            <strong>Sobre mí: </strong>
                            <a
                                href="mailto:ginosalvagnini12@gmail.com"
                                style={{ color: 'var(--color-secundario-light)', textDecoration: 'none' }}
                            >
                                Me dedico a la Ingeniería en Sistemas. Me apasiona el mundo de sistemas en general y su diseño.
                            </a>
                        </p>
                    </Card.Body>
                </Card>
            </div>

            {/*Proyectos*/}
            <div className="mt-5">
                <h2 className="mb-4 text-center">Otros proyectos que hice</h2>
                <Row className="g-4">

                    {/*CAP*/}
                    <Col md={6}>
                        <Card
                            className="shadow-lg border-0 rounded-4 h-100"
                            style={{
                                backgroundColor: 'var(--color-primario-light-medium)',
                                color: 'var(--color-interface)'
                            }}
                        >
                            <Card.Body className="d-flex flex-column align-items-center p-4 text-center">
                                <h3 className="mb-4">Proyecto CAP</h3>

                                <div
                                    className="mb-4 rounded-circle d-flex align-items-center justify-content-center shadow"
                                    style={{
                                        backgroundColor: 'var(--color-primario)',
                                        width: '160px',
                                        height: '160px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src="/CAP.png"
                                        alt="Logo de CAP"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <p className="fs-5 mb-0" style={{ fontFamily: 'var(--font-interface)' }}>
                                    Project manager, analista, diseñador y desarrollador del Sistema de información "CAP".
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/*Sistema de chips*/}
                    <Col md={6}>
                        <Card
                            className="shadow-lg border-0 rounded-4 h-100"
                            style={{
                                backgroundColor: 'var(--color-primario-light-medium)',
                                color: 'var(--color-interface)'
                            }}
                        >
                            <Card.Body className="d-flex flex-column align-items-center p-4 text-center">
                                <h3 className="mb-4">Sistema de chips</h3>

                                <div
                                    className="mb-4 rounded-circle d-flex align-items-center justify-content-center shadow"
                                    style={{
                                        backgroundColor: 'var(--color-primario)',
                                        width: '160px',
                                        height: '160px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src="/chips.png"
                                        alt="Sistema de chips"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <p className="fs-5 mb-0" style={{ fontFamily: 'var(--font-interface)' }}>
                                    Project manager y desarrollador de un POC (proof of concept) para un sistema de clasificación por chips RFID.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </Container>
    );
}

export default Contacto;