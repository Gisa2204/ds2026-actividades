export const buscarPorAutor = (libros, autor) => {
    let librosAutor = [];
    for (const libro of libros) {
        if (libro.autor === autor) {
            librosAutor.push(libro);
        }
    }
    return librosAutor;
};
export const librosDisponibles = (libros) => {
    let disponibles = [];
    for (const libro of libros) {
        if (libro.disponible) {
            disponibles.push(libro);
        }
    }
    return disponibles;
};
export const precioPromedio = (libros) => {
    let promedio = 0;
    for (const libro of libros) {
        promedio += libro.precio;
    }
    if (promedio === 0) {
        return 0;
    }
    return (promedio / libros.length);
};
export const agregarLibro = (libros, libro) => {
    libros.push(libro);
};
export const eliminarLibro = (libros, isbn) => {
    const indexLibro = libros.findIndex((libro) => libro.isbn === isbn);
    if (indexLibro !== -1) {
        libros.splice(indexLibro, 1);
    }
};
