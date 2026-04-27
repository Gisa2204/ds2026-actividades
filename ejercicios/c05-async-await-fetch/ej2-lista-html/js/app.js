import { obtenerUsuarios } from "./funciones.js";
const usuariosUL = document.querySelector("#usuarios-ul");
const cargandoP = document.querySelector("#cargando-p");
const errorP = document.querySelector("#error-p");
cargandoP.textContent = "Cargando...";
const arrayUsuarios = await obtenerUsuarios(); //Se llama al await ya que obtenerUsuarios es async
cargandoP.textContent = "";
if (arrayUsuarios.length === 0) { //Si devuelve un array sin nada, hubo error
    errorP.textContent = 'Hubo un error al cargar los datos.';
}
for (const usuario of arrayUsuarios) {
    const usuarioli = document.createElement("li");
    usuarioli.textContent = `Nombre: ${usuario.name} | Email: ${usuario.email}`;
    usuariosUL.appendChild(usuarioli);
}
