import { Routes, Route, Outlet } from 'react-router-dom';

import LayoutLibreria from './layout/LayoutLibreria';

import Home from './pages/Home';
import Catalogo from './components/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo';
import Contacto from './pages/Contacto';

import Login from './pages/Login';
import { SinPermiso } from './pages/SinPermiso';

import { AuthProvider } from './context/AuthContext';
import { LibroProvider } from './context/LibroContext';
import { PrivateRoute } from './layout/PrivateRoute';


function App() {

  return (
    <AuthProvider>
      <LibroProvider>
        <Routes>

          <Route path='/login' element={<Login />} />

          <Route element={<LayoutLibreria> <Outlet /> </LayoutLibreria>}>

            {/*Public routes*/}
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo titulo={"CATÁLOGO DE LIBROS"} />} />
            <Route path='/libro/:id' element={<LibroDetalle />} />
            <Route path='/contacto' element={<Contacto />} />

            <Route path="/sin-permiso" element={<SinPermiso />} />

            {/*Admin routes*/}
            <Route element={<PrivateRoute rol="ADMIN" />}>
              <Route path="/libro/nuevo" element={<LibroNuevo />} />
            </Route>

          </Route>

        </Routes>
      </LibroProvider>
    </AuthProvider>
  );
}

export default App;