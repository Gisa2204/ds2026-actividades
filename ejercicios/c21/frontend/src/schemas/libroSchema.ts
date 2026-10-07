import { z } from 'zod';

export const libroSchema = z.object({
  titulo: z.string().min(1, { message: "El título es obligatorio" }),
  autorId: z.number().min(1, { message: "Debe seleccionar un autor" }),
  precio: z.number().min(0.01, { message: "El precio debe ser no nulo y mayor a 0" }),
  imgSrc: z.string().optional().transform(val => (!val ? 'logo.svg' : val)) //Por si no ingresa una imagen, se pasa por defecto el logo
});

export type LibroFormInput = z.input<typeof libroSchema>;
export type LibroValidado = z.infer<typeof libroSchema>;