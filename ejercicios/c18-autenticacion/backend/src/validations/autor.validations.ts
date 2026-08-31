import { z } from "zod";

export const autorCreateSchema = z.object({
    nombreApellido: z.string().trim().min(1, "El nombre y apellido es obligatorio").max(50),
    nacionalidad: z.string().trim().min(1, "La nacionalidad es obligatoria").max(50)
});

export const autorUpdateSchema = autorCreateSchema.partial();

export type LibroCreate = z.infer<typeof autorCreateSchema>;