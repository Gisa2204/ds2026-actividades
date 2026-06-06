import 'bootstrap/dist/css/bootstrap.min.css'; {/*Importado del bootstrap*/}
import '../css/styles.css'; {/*Importado de mi CSS custom*/}

import HeaderLibreria from '../components/HeaderLibreria';
import Hero from '../components/Hero';
import CardLibro from '../components/CardLibro';
import Row from 'react-bootstrap/Row';

function Home() {
    return (
        <>
            <header>

                {/* Header con el logo de la pagina y la navbar */}
                <HeaderLibreria />

            </header>

            <main>

                {/* Seccion Hero*/}
                <Hero />

                {/* Seccion de libros */}
                <section className="container my-5">
                    <h1 className="text-center mb-5">Libros Destacados</h1>
                    <Row className="g-4">
                        <CardLibro titulo="Can't Hurt me" autor="David Doggins" precio={20} imgSrc="Cant_hurt_me.jpg" />
                        <CardLibro titulo="Never Finished" autor="David Doggins" precio={20} imgSrc="Never_finished.jpg" />
                        <CardLibro titulo="Infinite Powers" autor="Steven Strogatz" precio={15} imgSrc="Infinite_powers.jpg" />
                        <CardLibro titulo="Mistborn" autor="Brandon Sanderson" precio={30} imgSrc="Mistborn.jpg" />
                        <CardLibro titulo="Living with a seal" autor="Jesse Itzler" precio={10} imgSrc="Living_with_a_seal.jpg" />
                        <CardLibro titulo="En el limbo" autor="Estanislao Bachrach" precio={5} imgSrc="En_el_limbo.jpg" />
                    </Row>
                </section>

            </main>
        </>
    )
}

export default Home;