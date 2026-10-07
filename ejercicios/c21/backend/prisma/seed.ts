import { prisma } from "../src/config/prisma";
import bcrypt from "bcrypt";

const autores = [
  { nombreApellido: "David Goggins", nacionalidad: "Estados Unidos" },
  { nombreApellido: "Brandon Sanderson", nacionalidad: "Estados Unidos" },
  { nombreApellido: "Estanislao Bachrach", nacionalidad: "Argentina" },
  { nombreApellido: "Steven Strogatz", nacionalidad: "Estados Unidos" },
  { nombreApellido: "Jesse Itzler", nacionalidad: "Estados Unidos" },
];

const categorias = [
  { nombre: "Biografía" },
  { nombre: "Autoayuda" },
  { nombre: "Novela" },
  { nombre: "Ciencia" }
];

const libros = [
  { titulo: "Can't Hurt me", nombreApellidoAutor: "David Goggins", precio: 20, imgSrc: "Cant_hurt_me.jpg", disponible: true, categorias: ["Biografía", "Autoayuda"] },
  { titulo: "Never Finished", nombreApellidoAutor: "David Goggins", precio: 20, imgSrc: "Never_finished.jpg", disponible: true, categorias: ["Biografía", "Autoayuda"] },
  { titulo: "Infinite Powers", nombreApellidoAutor: "Steven Strogatz", precio: 15, imgSrc: "Infinite_powers.jpg", disponible: true, categorias: ["Ciencia"] },
  { titulo: "Mistborn", nombreApellidoAutor: "Brandon Sanderson", precio: 30, imgSrc: "Mistborn.jpg", disponible: true, categorias: ["Novela"] },
  { titulo: "Living with a seal", nombreApellidoAutor: "Jesse Itzler", precio: 10, imgSrc: "Living_with_a_seal.jpg", disponible: true, categorias: ["Biografía"] },
  { titulo: "En el limbo", nombreApellidoAutor: "Estanislao Bachrach", precio: 5, imgSrc: "En_el_limbo.jpg", disponible: true, categorias: ["Autoayuda"] }
];

const usuarios = [
  {
    email: "admin@libreria.test", nombre: "Admin", rol: "ADMIN" as
      const, password: "Admin1234"
  },
  {
    email: "cliente@libreria.test", nombre: "Cliente", rol: "CLIENTE" as
      const, password: "Cliente1234"
  },
];

async function main() {
  await prisma.autor.createMany({ data: autores });

  await prisma.categoria.createMany({ data: categorias });
  for (const { nombreApellidoAutor, categorias, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombreApellido: nombreApellidoAutor } },
        categorias: { connect: categorias.map(nombre => ({ nombre })) },
      }
    });
  }

  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: { ...datos, passwordHash: await bcrypt.hash(password, 10) },
    });
  }

}

main();