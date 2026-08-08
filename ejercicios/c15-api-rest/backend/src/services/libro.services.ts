import { Libro } from "../types/libro.types";

const libros: Libro[] = [
  {
    "id": 1,
    "titulo": "Can't Hurt me",
    "autor": "David Doggins",
    "precio": 20,
    "imgSrc": "Cant_hurt_me.jpg",
    "disponible": true
  },
  {
    "id": 2,
    "titulo": "Never Finished",
    "autor": "David Doggins",
    "precio": 20,
    "imgSrc": "Never_finished.jpg",
    "disponible": true
  },
  {
    "id": 3,
    "titulo": "Infinite Powers",
    "autor": "Steven Strogatz",
    "precio": 15,
    "imgSrc": "Infinite_powers.jpg",
    "disponible": true
  },
  {
    "id": 4,
    "titulo": "Mistborn",
    "autor": "Brandon Sanderson",
    "precio": 30,
    "imgSrc": "Mistborn.jpg",
    "disponible": true
  },
  {
    "id": 5,
    "titulo": "Living with a seal",
    "autor": "Jesse Itzler",
    "precio": 10,
    "imgSrc": "Living_with_a_seal.jpg",
    "disponible": true
  },
  {
    "id": 6,
    "titulo": "En el limbo",
    "autor": "Estanislao Bachrach",
    "precio": 5,
    "imgSrc": "En_el_limbo.jpg",
    "disponible": true
  }
]

let proximoId = 6;

export function findAll(disponible?: boolean): Libro[] {
  if (disponible === undefined) return libros;
  return libros.filter(libro => libro.disponible === disponible);
}

export function findById(id: number): Libro | undefined {
  return libros.find(libro => libro.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Libro, "id">): Libro | undefined {
  const i = libros.findIndex(libro => libro.id === id);
  if (i === -1) return undefined;
  libros[i] = { id, ...datos };
  return libros[i];
}

export function remove(id: number): boolean {
  const i = libros.findIndex(libro => libro.id === id);
  if (i === -1) return false;
  libros.splice(i, 1);
  return true;
}