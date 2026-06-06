import { Routes, Route } from 'react-router-dom';
import LayoutLibreria from './components/Layout/LayoutLibreria';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';

function App() {
  return (
      <LayoutLibreria>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/libro/:id' element={<LibroDetalle />}/>
        </Routes>
      </LayoutLibreria>
  );
}

export default App;