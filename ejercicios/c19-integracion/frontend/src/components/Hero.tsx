import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <section className="hero-bg-img text-white py-5 shadow-lg">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1 className="display-2 fw-bold mb-3">Explora los confines del universo.</h1>
                            <p className="lead mb-4 fs-2">Explora miles de títulos en nuestra colección exclusiva.</p>
                            <Nav className="ms-auto custom-nav-links">
                                <Link to="/catalogo" className="btn btn-outline-light fs-4">
                                    Comenzar lectura
                                </Link>
                            </Nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;