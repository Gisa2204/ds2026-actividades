import 'bootstrap/dist/css/bootstrap.min.css'; {/*Importado del bootstrap*/}
import '../css/styles.css'; {/*Importado de mi CSS custom*/}

import Hero from '../components/Hero';

import type { cardLibroProps } from "../types/libro";

import Catalogo from './Catalogo';

interface CatalogoProps {
  libros: cardLibroProps[];
  loading: boolean;
  error: string | null;
}

function Home( {libros, loading, error}: CatalogoProps ) {
    return (
        <>

                {/* Seccion Hero*/}
                <Hero />

                {/* Seccion de libros */}
                <section className="container my-5">
                    <h1 className="text-center mb-5">Libros Destacados</h1>
                    <Catalogo libros={libros} loading={loading} error={error} />
                </section>

        </>
    )
}

export default Home;