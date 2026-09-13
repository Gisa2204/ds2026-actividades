import { useState, useEffect } from 'react';
import { apiFetch } from '../services/api';

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => 
    {
        const cargar = async () => {
            try 
            {
                setLoading(true);
                setError(null);

                //Timer de espera para que se aprecie el spinner (ajustar tiempo a gusto)
                //const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
                //await sleep(3000);

                setData(await apiFetch<T>(url));

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

    return { data, loading, error };
}

export default useFetch;