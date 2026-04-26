import { Libro } from './libroClass.js';

export const buscarPorAutor = (libros: Libro[], autor: string): Libro[] => {
    let librosAutor: Libro[] = [];

    for (const libro of libros) {
        if (libro.autor === autor) {
            librosAutor.push(libro);
        }
    }

    return librosAutor;
}

export const librosDisponibles = (libros: Libro[]): Libro[] => {
    let disponibles: Libro[] = [];

    for (const libro of libros) {
        if (libro.disponible) {
            disponibles.push(libro);
        }
    }

    return disponibles;
}

export const precioPromedio = (libros: Libro[]): number => {
    let promedio = 0;

    for (const libro of libros) {
        promedio += libro.precio;
    }
    if (promedio === 0) {
        return 0;
    }
    return (promedio / libros.length);
}

export const agregarLibro = (libros: Libro[], libro: Libro): void => {
    libros.push(libro);
}

export const eliminarLibro = (libros: Libro[], isbn: string): void => {
    const indexLibro = libros.findIndex( (libro) => libro.isbn === isbn);
    if (indexLibro !== -1) {
        libros.splice(indexLibro, 1);
    }
}