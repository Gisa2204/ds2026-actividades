import { Row } from "react-bootstrap";
import CardLibro from "../components/CardLibro";

import type { cardLibroProps } from "../types/libro";

interface CatalogoProps {
  libros: cardLibroProps[];
}

function Catalogo( {libros}: CatalogoProps ) {
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