import { prisma } from "../src/config/prisma";

const libros = [
  {
    "titulo": "Can't Hurt me",
    "autor": "David Doggins",
    "precio": 20,
    "imgSrc": "Cant_hurt_me.jpg",
    "disponible": true
  },
  {
    "titulo": "Never Finished",
    "autor": "David Doggins",
    "precio": 20,
    "imgSrc": "Never_finished.jpg",
    "disponible": true
  },
  {
    "titulo": "Infinite Powers",
    "autor": "Steven Strogatz",
    "precio": 15,
    "imgSrc": "Infinite_powers.jpg",
    "disponible": true
  },
  {
    "titulo": "Mistborn",
    "autor": "Brandon Sanderson",
    "precio": 30,
    "imgSrc": "Mistborn.jpg",
    "disponible": true
  },
  {
    "titulo": "Living with a seal",
    "autor": "Jesse Itzler",
    "precio": 10,
    "imgSrc": "Living_with_a_seal.jpg",
    "disponible": true
  },
  {
    "titulo": "En el limbo",
    "autor": "Estanislao Bachrach",
    "precio": 5,
    "imgSrc": "En_el_limbo.jpg",
    "disponible": true
  }
];

const autores = [
  { nombreApellido: "David Goggins", nacionalidad: "Estados Unidos" },
  { nombreApellido: "Brandon Sanderson", nacionalidad: "Estados Unidos" },
  { nombreApellido: "Estanislao Bachrach", nacionalidad: "Argentina" },
  { nombreApellido: "Steven Strogatz", nacionalidad: "Estados Unidos" },
  { nombreApellido: "Jesse Itzler", nacionalidad: "Estados Unidos" },
];

async function main() {
 await prisma.libro.createMany({ data: libros });
 await prisma.autor.createMany({ data: autores });
}

main();