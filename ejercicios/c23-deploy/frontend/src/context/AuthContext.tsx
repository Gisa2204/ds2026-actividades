import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from 'react';
import { apiFetch } from "../services/api";
import { borrarToken, guardarToken, obtenerToken } from "../services/sesion";
import type { Usuario, Credenciales, Rol } from "../types/sesion";


interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  estaAutenticado: boolean;
  tieneRol: (rol: Rol) => boolean; // usuario?.rol === rol
  login: (credenciales: Credenciales) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }){

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [cargando, setCargando] = useState(obtenerToken() !== null);

    //Si el usuario ya tenia un token en localStorage, hay que ir a buscar sus datos de nuevo (usuario está en NULL)
    useEffect(() => {
    if (!obtenerToken()) return;
    apiFetch<Usuario>('/auth/yo')
        .then(setUsuario)
        .catch(() => borrarToken()) // vencido o invalido. Lo limpia
        .finally(() => setCargando(false));
    }, []);

    const logout = () => {
        borrarToken();
        setUsuario(null);
    };

    const login = async (credenciales: Credenciales) => {
        const data = await apiFetch<{ token: string; usuario: Usuario }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credenciales)
        });

        guardarToken(data.token);
        setUsuario(data.usuario);
    };

    // // checkea sesión expirada
    useEffect(() => {
        window.addEventListener('sesion-expirada', logout);
        return () => window.removeEventListener('sesion-expirada', logout);
    }, []);


  return (
    <AuthContext.Provider 
        value={{ 
            usuario, 
            cargando, 
            estaAutenticado: usuario !== null, 
            tieneRol: (rol: Rol) => usuario?.rol === rol, 
            login, 
            logout 
        }}>

      {children}

    </AuthContext.Provider>
  );

}

// hook para consumirlo
export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  }
  return contexto;
}