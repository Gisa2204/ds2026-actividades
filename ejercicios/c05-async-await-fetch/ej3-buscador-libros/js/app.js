const librosBuscadorForm = document.querySelector("#librosBuscador-form");
const buscarInput = document.querySelector("#buscar-input");
const resultadosUL = document.querySelector("#resultados-ul");
const cargandoP = document.querySelector("#cargando-p");
const errorP = document.querySelector("#error-p");
async function obtenerLibros(q) {
    try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}`; //encodeURIComponent saca espacios y caracteres especiales
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const libros = data.docs;
        return libros;
    }
    catch (error) {
        console.error(`Error al obtener libros para ${q} (${error})`);
        return [];
    }
}
librosBuscadorForm.addEventListener("submit", async (librosBuscadorEvent) => //Hay que marcarla como async porque va a tener que esperar con la llamada de obtenerLibros(q)
 {
    librosBuscadorEvent.preventDefault();
    const q = buscarInput.value.trim();
    if (q === "") {
        alert("No puedes ingresar un campo vacío!");
        return;
    }
    cargandoP.textContent = "Cargando...";
    let librosBuscados = await obtenerLibros(q);
    cargandoP.textContent = "";
    if (librosBuscados.length === 0) {
        errorP.textContent = 'No se encontraron libros.';
        return;
    }
    librosBuscados = librosBuscados.slice(0, 10);
    for (const libro of librosBuscados) {
        const libroli = document.createElement("li");
        libroli.textContent = `Título: ${libro.title} | Autor: ${libro.author_name} | Año publicado: ${libro.first_publish_year}`;
        resultadosUL.appendChild(libroli);
    }
});
export {};
