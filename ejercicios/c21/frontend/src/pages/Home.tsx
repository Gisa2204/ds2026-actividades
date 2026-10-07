import 'bootstrap/dist/css/bootstrap.min.css'; {/*Importado del bootstrap*/}
import '../css/styles.css'; {/*Importado de mi CSS custom*/}

import Hero from '../components/Hero';

import Catalogo from './Catalogo';

function Home() {
    return (
        <>
                <Hero />
                <Catalogo titulo={"DESTACADOS"} />
        </>
    )
}

export default Home;