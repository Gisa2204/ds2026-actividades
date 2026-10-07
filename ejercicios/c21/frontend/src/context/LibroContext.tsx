import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from 'react';
import { apiFetch } from "../services/api";
import type { Libro } from "../types/libro";


interface LibroContextType {
    libros: Libro[];
    loading: boolean;
    errorApi: string | null;
    update: () => void;
}

const LibroContext = createContext<LibroContextType | null>(null);

export function LibroProvider({ children }: { children: ReactNode }){

    const [libros, setLibros] = useState<Libro[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorApi, setErrorApi] = useState<string | null>(null);

    const getLibros = () => {
        setLoading(true);
        setErrorApi(null);

        apiFetch<Libro[]>('/libros')
        .then(setLibros)
        .catch((e) => setErrorApi(e instanceof Error ? e.message : 'Error desconocido'))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        getLibros();
    }, []);

    const update = getLibros;

  return (
    <LibroContext.Provider 
        value={{ 
            libros,
            loading,
            errorApi,
            update
        }}>

      {children}

    </LibroContext.Provider>
  );

}

// hook para consumirlo
export function useLibro() {
  const contexto = useContext(LibroContext);
  if (!contexto) {
    throw new Error('useLibro debe usarse dentro de <LibroProvider>');
  }
  return contexto;
}