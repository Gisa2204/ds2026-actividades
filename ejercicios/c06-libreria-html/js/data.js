const librosBuscadorForm = document.querySelector("#librosBuscador-form");
const buscarInput = document.querySelector("#buscar-input");
const resultadosGrid = document.querySelector("#resultados-grid");
const cargandoP = document.querySelector("#cargando-p");
const errorP = document.querySelector("#error-p");

async function obtenerLibros(q) {
    try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return data.docs;
    } catch (error) {
        console.error(`Error al obtener libros para ${q} (${error})`);
        return [];
    }
}

librosBuscadorForm.addEventListener("submit", async (librosBuscadorEvent) => {
    librosBuscadorEvent.preventDefault();
    const q = buscarInput.value.trim();

    if (q === "") {
        alert("No puedes ingresar un campo vacío!");
        return;
    }

    resultadosGrid.innerHTML = ""; 
    errorP.textContent = "";
    cargandoP.textContent = "Cargando...";

    let librosBuscados = await obtenerLibros(q);
    cargandoP.textContent = "";

    if (librosBuscados.length === 0) {
        errorP.textContent = 'No se encontraron libros.';
        return;
    }

    librosBuscados = librosBuscados.slice(0, 12);

    for (const libro of librosBuscados) {
        const coverID = libro.cover_i;
        const coverImg = coverID 
            ? `https://covers.openlibrary.org/b/id/${coverID}-L.jpg` 
            : 'https://via.placeholder.com/400x600?text=No+Cover';

        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <img src="${coverImg}" class="card-img-top" alt="${libro.title}" style="height: 350px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${libro.title}</h5>
                    <p class="card-text text-muted small">${libro.author_name ? libro.author_name[0] : "Autor desconocido"}</p>
                    <p class="card-text mb-4">Año: ${libro.first_publish_year || "N/A"}</p>
                    <a href="./libro.html" class="btn btn-outline-primary mt-auto">Ver más</a>
                </div>
            </div>
        `;
        
        resultadosGrid.appendChild(col);
    }
});

export {};