import { Routes, Route, Outlet } from 'react-router-dom';

import LayoutLibreria from './layout/LayoutLibreria';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo';
import Contacto from './pages/Contacto';

import Login from './pages/Login';
import { SinPermiso } from './pages/SinPermiso';

import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import type { cardLibroProps } from './types/libro';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './layout/PrivateRoute';


function App() {

  //Array global para que se comparta en toda la web-app  <--- CAMBIAR POR UN LIBRO PROVIDER
  const [libros, setLibros] = useState<cardLibroProps[]>([]);

  //Fetching de libros (se llama ni bien se inicia la app)
  const { data: fetchedLibros, loading, error } = useFetch<cardLibroProps[]>("/libros");
  useEffect(() => {
    if (fetchedLibros) {
      setLibros(fetchedLibros);
    }
  }, [fetchedLibros]);

  return (
    <AuthProvider>
      <Routes>

        <Route path='/login' element={<Login />} />

        <Route element={<LayoutLibreria> <Outlet /> </LayoutLibreria>}>

          {/*Public routes*/}
          <Route path='/' element={<Home libros={libros} loading={loading} error={error} />} />
          <Route path='/catalogo' element={<Catalogo titulo={"CATÁLOGO DE LIBROS"} libros={libros} loading={loading} error={error} />} />
          <Route path='/libro/:id' element={<LibroDetalle />} />
          <Route path='/contacto' element={<Contacto />} />

          <Route path="/sin-permiso" element={<SinPermiso />} />

          {/*Admin routes*/}
          <Route element={<PrivateRoute rol="ADMIN" />}>
            <Route path="/libro/nuevo" element={<LibroNuevo />} />
          </Route>

        </Route>

      </Routes>
    </AuthProvider>
  );
}

export default App;