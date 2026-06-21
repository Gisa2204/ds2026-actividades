import 'bootstrap/dist/css/bootstrap.min.css'; {/*Importado del bootstrap*/}
import '../css/styles.css'; {/*Importado de mi CSS custom*/}

import Hero from '../components/Hero';
import CardLibro from '../components/CardLibro';
import Row from 'react-bootstrap/Row';

function Home() {
    return (
        <>

                {/* Seccion Hero*/}
                <Hero />

                {/* Seccion de libros */}
                <section className="container my-5">
                    <h1 className="text-center mb-5">Libros Destacados</h1>
                    <Row className="g-4">
                        <CardLibro titulo="Can't Hurt me" autor="David Doggins" precio={20} imgSrc="Cant_hurt_me.jpg" id={1} />
                        <CardLibro titulo="Never Finished" autor="David Doggins" precio={20} imgSrc="Never_finished.jpg" id={2} />
                        <CardLibro titulo="Infinite Powers" autor="Steven Strogatz" precio={15} imgSrc="Infinite_powers.jpg" id={3} />
                        <CardLibro titulo="Mistborn" autor="Brandon Sanderson" precio={30} imgSrc="Mistborn.jpg" id={4} />
                        <CardLibro titulo="Living with a seal" autor="Jesse Itzler" precio={10} imgSrc="Living_with_a_seal.jpg" id={5} />
                        <CardLibro titulo="En el limbo" autor="Estanislao Bachrach" precio={5} imgSrc="En_el_limbo.jpg" id={6} />
                    </Row>
                </section>

        </>
    )
}

export default Home;