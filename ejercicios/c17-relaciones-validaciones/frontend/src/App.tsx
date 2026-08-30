import { Routes, Route } from 'react-router-dom';
import LayoutLibreria from './components/Layout/LayoutLibreria';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo';

import { useState, useEffect } from 'react';

import useFetchLibros from './hooks/useFetchLibros';

import type { cardLibroProps } from './types/libro';

function App() {

  //Array global para que se comparta en toda la web-app
  const [libros, setLibros] = useState<cardLibroProps[]>([]);

  //Fetching de libros (se llama ni bien se inicia la app)
  const { fetchedLibros, loading, error } = useFetchLibros("/data/libros.json");
  useEffect(() => {
    if (fetchedLibros) {
      setLibros(fetchedLibros);
    }
  }, [fetchedLibros]);

  //Funcion para agregar libros
  const [isProcessing, setIsProcessing] = useState(false);
  const agregarLibro = async (nuevoLibro: cardLibroProps) => {
    setIsProcessing(true);

    //Simulamos un delay al agregar un libro
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1500);

    setLibros(prevLibros => [nuevoLibro, ...prevLibros]);
    setIsProcessing(false);
  }

  return (
    <LayoutLibreria>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogo' element={<Catalogo libros={libros} loading={loading || isProcessing} error={error} />} />
        <Route path='/libro/:id' element={<LibroDetalle />} />
        <Route path='/libro/nuevo' element={<LibroNuevo onAgregarLibro={agregarLibro} />} />
      </Routes>
    </LayoutLibreria>
  );
}

export default App;