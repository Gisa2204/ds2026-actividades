import { Row } from "react-bootstrap";
import CardLibro from "../components/CardLibro";

function Catalogo() {
    return (
        <>
            <h1 className="text-center pt-3">CATALOGO DE LIBROS</h1>
            <Row className="py-3 px-5 g-4">
                <CardLibro titulo="Can't Hurt me" autor="David Doggins" precio={20} imgSrc="Cant_hurt_me.jpg" id={1} />
                <CardLibro titulo="Never Finished" autor="David Doggins" precio={20} imgSrc="Never_finished.jpg" id={2} />
                <CardLibro titulo="Infinite Powers" autor="Steven Strogatz" precio={15} imgSrc="Infinite_powers.jpg" id={3} />
                <CardLibro titulo="Mistborn" autor="Brandon Sanderson" precio={30} imgSrc="Mistborn.jpg" id={4} />
                <CardLibro titulo="Living with a seal" autor="Jesse Itzler" precio={10} imgSrc="Living_with_a_seal.jpg" id={5} />
                <CardLibro titulo="En el limbo" autor="Estanislao Bachrach" precio={5} imgSrc="En_el_limbo.jpg" id={6} />
            </Row>
        </>
    )
}

export default Catalogo;