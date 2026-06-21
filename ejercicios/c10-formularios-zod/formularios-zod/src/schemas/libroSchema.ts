import { z } from 'zod';

export const libroSchema = z.object({
  titulo: z.string().min(1, { message: "El título es obligatorio" }),
  autor: z.string().min(1, { message: "El autor es obligatorio" }),
  precio: z.number().min(0.01, { message: "El precio debe ser no nulo y mayor a 0" }),
  imgSrc: z.string().optional() 
});

export type LibroValidado = z.infer<typeof libroSchema>;