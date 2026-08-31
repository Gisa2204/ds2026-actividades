import { useState, useEffect } from 'react';

import type { cardLibroProps } from '../types/libro';

function useFetchLibros(url: string) {
    const [fetchedLibros, setFetchedLibros] = useState<cardLibroProps[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => 
    {
        const cargar = async () => {
            try 
            {
                setLoading(true);
                setError(null);

                //Timer de espera de dos segundos para que se aprecie el spinner
                const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
                await sleep(3000);

                const res = await fetch(url);
                if (!res.ok) throw new Error('Error al cargar los datos');
                setFetchedLibros(await res.json());

            } 
            catch (e) 
            {
                setError(e instanceof Error ? e.message : 'Error desconocido');
            } 
            finally 
            {
                setLoading(false);
            }
        };

        cargar();

    }, [url]);

    return { fetchedLibros, loading, error };
}

export default useFetchLibros;