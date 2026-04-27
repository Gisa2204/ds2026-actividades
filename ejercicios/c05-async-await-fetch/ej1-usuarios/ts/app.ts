import { obtenerUsuarios } from "./funciones.js";
import { Usuario } from "./clases.js";

const arrayUsuarios: Usuario[] = await obtenerUsuarios(); //Se llama al await ya que obtenerUsuarios es async

for (const usuario of arrayUsuarios) {
    console.log
    (`Nombre: ${usuario.name} | Email: ${usuario.email}`);
}