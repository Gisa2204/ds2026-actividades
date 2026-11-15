import { Row, Spinner } from "react-bootstrap";

import CardLibro from "./CardLibro";

import { useLibro } from "../context/LibroContext";

interface CatalogoProps {
    titulo: string
}

function Catalogo( {titulo}: CatalogoProps ) {

    const { libros, loading, errorApi} = useLibro()

    if (loading) 
    { 
        return (
            <div className="text-center py-5">
                <Spinner animation="border" role="status" variant="light">
                    <span className="visually-hidden">Cargando libros...</span>
                </Spinner>
            </div>
        );
    }

    if (errorApi) 
    { 
        return ( 
            <div className="text-center text-danger py-5">Error: {errorApi}</div>
        );
    }

    return (
        <section className="container my-5">
            <h1 className="text-center pt-3">{titulo}</h1>
            <Row className="py-3 px-5 g-5">
                {
                    libros.map
                        (l => 
                            <CardLibro
                                titulo={l.titulo}
                                autor={l.autor}
                                precio={l.precio}
                                imgSrc={l.imgSrc}
                                id={l.id}
                                key={l.id}
                            />
                        )
                }
            </Row>
        </section>
    )
}

export default Catalogo;