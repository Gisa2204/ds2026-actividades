import { Libro } from "../types/libro.types";
import { prisma } from "../config/prisma";
import { Prisma } from "../generated/prisma/client";

export type LibroDetalle = Prisma.LibroGetPayload<{ include: { autor: true, categorias: true } }>

export function findAll(disponible?: boolean): Promise<LibroDetalle[]> {
  return prisma.libro.findMany({ 
    where: { disponible },
    include: { autor: true, categorias: true }
  });
}

export function findById(id: number): Promise<LibroDetalle | null> {
  return prisma.libro.findUnique({ 
    where: { id },
    include: { autor: true, categorias: true }
  });
}

export function create(datos: Omit<Libro, "id">): Promise<Libro> {
  return prisma.libro.create({ data: datos });
}

export async function update(id: number, datos: Omit<Libro, "id">): Promise<boolean> {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return false;
  await prisma.libro.update({ where: { id }, data: datos });
  return true;
}

export async function remove(id: number): Promise<boolean> {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return false;
  await prisma.libro.delete({ where: { id } });
  return true;
}