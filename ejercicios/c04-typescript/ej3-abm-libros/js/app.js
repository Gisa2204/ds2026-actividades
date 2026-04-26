import { buscarPorAutor, eliminarLibro, librosDisponibles, precioPromedio } from "./funciones.js";
import { catalogoLibros } from "./librosDB.js"; //Catálogo pre-creado por mí llamado en variable 'catalogoLibros' (ver en librosDB)
const catalogo = document.querySelector("#compra-list");
const filtroAutorInput = document.querySelector("#filtroAutor-input");
const filtrarButton = document.querySelector("#filtrar-button");
const disponiblesButton = document.querySelector("#disponibles-button");
const todosButton = document.querySelector("#todos-button");
const statsParagraph = document.querySelector("#stats");
const librosForm = document.querySelector("#libros-form");
const tituloInput = document.querySelector("#titulo-input");
const autorInput = document.querySelector("#autor-input");
const precioInput = document.querySelector("#precio-input");
const generoInput = document.querySelector("#genero-input");
const disponibleInput = document.querySelector("#disponible-input");
const errorFormDiv = document.querySelector("#errorForm-div");
const actualizarStats = (libros) => {
    statsParagraph.textContent =
        `Cantidad de libros: ${libros.length} - 
    Precio promedio: $${precioPromedio(libros).toFixed(2)}`; //toFixed(2) se usa para redondear hasta dos decimales
};
const renderizar = (libros) => {
    catalogo.textContent = ""; //Para limpiar los libros que puedan ya haber
    for (const libro of libros) {
        //Crear el li con la info del libro
        const libroli = document.createElement("li");
        const libroSpan = document.createElement("span");
        libroSpan.textContent =
            `ISBN: ${libro.isbn} | 
            TÍTULO: ${libro.titulo} | 
            AUTOR: ${libro.autor} | 
            PRECIO: $${libro.precio}`;
        if (libro.genero) {
            libroSpan.textContent += ` | GENERO: ${libro.genero}`;
        }
        if (!libro.disponible) {
            libroSpan.textContent += `   (NO DISPONIBLE)`;
            libroSpan.style.color = "red";
        }
        //Crear btn de eliminar
        const eliminarLibroBtn = document.createElement('button');
        eliminarLibroBtn.textContent = 'ELIMINAR';
        eliminarLibroBtn.className = 'eliminar-btn';
        eliminarLibroBtn.addEventListener('click', () => {
            eliminarLibro(libros, libro.isbn); //Borrar libro del catalogo
            libroli.remove(); //Borrar la <li>
            actualizarStats(libros);
        });
        libroli.appendChild(libroSpan);
        libroli.appendChild(eliminarLibroBtn);
        catalogo.appendChild(libroli);
    }
    actualizarStats(libros);
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
const validarFormulario = () => {
    let erroresFlag = false; //Se agrega un libro solamente si la flag es false
    const titulo = tituloInput.value.trim();
    const autor = autorInput.value.trim();
    const precio = Number(precioInput.value);
    const genero = generoInput.value.trim();
    const disponible = disponibleInput.checked;
    if (titulo === "") {
        const tituloError = document.createElement("p");
        tituloError.textContent = "Debes ingresar un título!";
        tituloError.style.color = "red";
        errorFormDiv.appendChild(tituloError);
        erroresFlag = true;
    }
    if (autor === "") {
        const autorError = document.createElement("p");
        autorError.textContent = "Debes ingresar un autor!";
        autorError.style.color = "red";
        errorFormDiv.appendChild(autorError);
        erroresFlag = true;
    }
    if (isNaN(precio) || precio <= 0) {
        const precioError = document.createElement("p");
        precioError.textContent = "Debes ingresar un precio válido!";
        precioError.style.color = "red";
        errorFormDiv.appendChild(precioError);
        erroresFlag = true;
    }
    if (erroresFlag) {
        return null;
    }
    else {
        const libro = {
            isbn: `AUTO-${Date.now()}`,
            titulo: titulo,
            autor: autor,
            precio: precio,
            genero: genero,
            disponible: disponible
        };
        return libro;
    }
};
librosForm.addEventListener("submit", (librosEvent) => {
    librosEvent.preventDefault();
    errorFormDiv.textContent = ""; //Limpiar los posibles mensajes de error que hayan quedado
    const resultado = validarFormulario();
    if (resultado === null)
        return;
    catalogoLibros.push(resultado);
    renderizar(catalogoLibros);
});
//Renderizar el catálogo entero por defecto
renderizar(catalogoLibros);
