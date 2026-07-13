import { Row, Spinner } from "react-bootstrap";

import CardLibro from "../components/CardLibro";

import type { cardLibroProps } from "../types/libro";

interface CatalogoProps {
  libros: cardLibroProps[];
  loading: boolean;
  error: string | null;
}

function Catalogo( {libros, loading, error}: CatalogoProps ) {

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

    if (error) 
    { 
        return ( 
            <div className="text-center text-danger py-5">Error: {error}</div>
        );
    }

    return (
        <>
            <h1 className="text-center pt-3">CATALOGO DE LIBROS</h1>
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
                            />
                        )
                }
            </Row>
        </>
    )
}

export default Catalogo;