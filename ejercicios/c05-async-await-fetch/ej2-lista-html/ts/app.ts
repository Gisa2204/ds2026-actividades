import { obtenerUsuarios } from "./funciones.js";
import { Usuario } from "./clases.js";

const usuariosUL = document.querySelector("#usuarios-ul") as HTMLUListElement;
const cargandoP = document.querySelector("#cargando-p") as HTMLParagraphElement;
const errorP = document.querySelector("#error-p") as HTMLParagraphElement;

cargandoP.textContent = "Cargando...";
const arrayUsuarios: Usuario[] = await obtenerUsuarios(); //Se llama al await ya que obtenerUsuarios es async
cargandoP.textContent = "";

if (arrayUsuarios.length === 0) { //Si devuelve un array sin nada, hubo error
    errorP.textContent = 'Hubo un error al cargar los datos.';
}

for (const usuario of arrayUsuarios) {
    
    const usuarioli = document.createElement("li");
    usuarioli.textContent = `Nombre: ${usuario.name} | Email: ${usuario.email}`

    usuariosUL.appendChild(usuarioli);
}