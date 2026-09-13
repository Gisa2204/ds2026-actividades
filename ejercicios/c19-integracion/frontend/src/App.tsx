import { Routes, Route } from 'react-router-dom';

import LayoutLibreria from './layout/LayoutLibreria';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo';
import Contacto from './pages/Contacto';

import { useState, useEffect } from 'react';

import useFetch from './hooks/useFetch';

import type { cardLibroProps } from './types/libro';
import Login from './pages/Login';


function App() {

  //Array global para que se comparta en toda la web-app
  const [libros, setLibros] = useState<cardLibroProps[]>([]);

  //Fetching de libros (se llama ni bien se inicia la app)
  const { data: fetchedLibros, loading, error } = useFetch<cardLibroProps[]>("/libros");
  useEffect(() => {
    if (fetchedLibros) {
      setLibros(fetchedLibros);
    }
  }, [fetchedLibros]);

  return (
    <LayoutLibreria>
      <Routes>
        <Route path='/' element={<Home libros={libros} loading={loading} error={error} />} />
        <Route path='/catalogo' element={<Catalogo libros={libros} loading={loading} error={error} />} />
        <Route path='/libro/:id' element={<LibroDetalle />} />
        <Route path='/libro/nuevo' element={<LibroNuevo />} />
        <Route path='/contacto' element={<Contacto />} />

        <Route path='/login' element={<Login />} />
      </Routes>
    </LayoutLibreria>
  );
}

export default App;