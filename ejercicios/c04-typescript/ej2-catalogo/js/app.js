import { buscarPorAutor, librosDisponibles, precioPromedio } from "./funciones.js";
import { catalogoLibros } from "./librosDB.js"; //Catálogo pre-creado por mí llamado en variable 'catalogoLibros' (ver en librosDB)
const catalogo = document.querySelector("#compra-list");
const filtroAutorInput = document.querySelector("#filtroAutor-input");
const filtrarButton = document.querySelector("#filtrar-button");
const disponiblesButton = document.querySelector("#disponibles-button");
const todosButton = document.querySelector("#todos-button");
const statsParagraph = document.querySelector("#stats");
const renderizar = (libros) => {
    catalogo.textContent = ""; //Para limpiar los libros que puedan ya haber
    for (const libro of libros) {
        const libroli = document.createElement("li");
        libroli.textContent =
            `ISBN: ${libro.isbn} | 
            TÍTULO: ${libro.titulo} | 
            AUTOR: ${libro.autor} | 
            PRECIO: $${libro.precio}`;
        if (libro.genero) {
            libroli.textContent += ` | GENERO: ${libro.genero}`;
        }
        if (!libro.disponible) {
            libroli.textContent += `   (NO DISPONIBLE)`;
            libroli.style.color = "red";
        }
        catalogo.appendChild(libroli);
    }
    statsParagraph.textContent =
        `Cantidad de libros: ${libros.length} - 
    Precio promedio: $${precioPromedio(libros).toFixed(2)}`; //toFixed(2) se usa para redondear hasta dos decimales
};
filtrarButton.addEventListener("click", () => {
    const autorInput = filtroAutorInput.value.trim(); //La función trim() es para sacar espacios en blanco al principio y al final
    if (autorInput === "") {
        alert("Debe ingresar un autor!");
        return;
    }
    renderizar(buscarPorAutor(catalogoLibros, autorInput));
});
todosButton.addEventListener("click", () => renderizar(catalogoLibros));
disponiblesButton.addEventListener("click", () => renderizar(librosDisponibles(catalogoLibros)));
//Renderizar el catálogo entero por defecto
renderizar(catalogoLibros);
