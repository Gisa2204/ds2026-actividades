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
                <Hero />
                <Catalogo titulo={"DESTACADOS"} libros={libros} loading={loading} error={error} />
        </>
    )
}

export default Home;