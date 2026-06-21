import { Routes, Route } from 'react-router-dom';
import LayoutLibreria from './components/Layout/LayoutLibreria';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo';

import { useState } from 'react';

import type { cardLibroProps } from './types/libro';

function App() {

  //Array global para que se comparta en toda la web-app
  const [libros, setLibros] = useState<cardLibroProps[]>([
    { titulo: "Can't Hurt me", autor: "David Doggins", precio: 20, imgSrc: "Cant_hurt_me.jpg", id: 1 }
  ]);
  const agregarLibro = (nuevoLibro: cardLibroProps) => 
  {
    setLibros( [...libros, nuevoLibro] );
  }
  
  return (
      <LayoutLibreria>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo libros={libros} />} />
          <Route path='/libro/:id' element={<LibroDetalle />} />
          <Route path='/libro/nuevo' element={<LibroNuevo onAgregarLibro={agregarLibro} />} />
        </Routes>
      </LayoutLibreria>
  );
}

export default App;