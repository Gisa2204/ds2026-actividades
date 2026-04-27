import { obtenerUsuarios } from "./funciones.js";
const arrayUsuarios = await obtenerUsuarios(); //Se llama al await ya que obtenerUsuarios es async
for (const usuario of arrayUsuarios) {
    console.log(`Nombre: ${usuario.name} | Email: ${usuario.email}`);
}
