import { Autor } from "../types/autor.types";
import { prisma } from "../config/prisma";

export function findAll(): Promise<Autor[]> {
  return prisma.autor.findMany();
}

export function findById(id: number): Promise<Autor | null> {
  return prisma.autor.findUnique({ where: { id } });
}

export function create(datos: Omit<Autor, "id">): Promise<Autor> {
  return prisma.autor.create({ data: datos });
}

export async function update(id: number, datos: Omit<Autor, "id">): Promise<boolean> {
  const existe = await prisma.autor.findUnique({ where: { id } });
  if (!existe) return false;
  await prisma.autor.update({ where: { id }, data: datos });
  return true;
}

export async function remove(id: number): Promise<boolean> {
  const existe = await prisma.autor.findUnique({ where: { id } });
  if (!existe) return false;
  await prisma.autor.delete({ where: { id } });
  return true;
}