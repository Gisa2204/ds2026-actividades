import { it, expect, vi } from 'vitest';
import type { Rol, Usuario } from '../types/sesion';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import HeaderLibreria from './HeaderLibreria';
import { screen } from '@testing-library/react';

function renderHeader(usuario: Usuario | null) {
  const auth = { usuario, cargando: false, estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol, login: vi.fn(), logout: vi.fn() };

  return render(
    <MemoryRouter>
        <AuthContext.Provider value={auth}>
          <HeaderLibreria />
        </AuthContext.Provider>
    </MemoryRouter>,
  );
}

it('No ve la tab "Nuevo libro" de admin', () => {
  renderHeader({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' });

  expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
});