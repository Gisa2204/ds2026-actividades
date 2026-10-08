import { describe, it, expect } from "vitest";
import { libroCreateSchema, idParamSchema } from "./libro.validation";

const libroValido = { titulo: "Can't Hurt Me", precio: 10, imgSrc:"Cant_hurt_me.jpg", autorId: 1 };

describe("libroCreateSchema", () => {

    it("Rechaza precio negativo", () => {
        const r = libroCreateSchema.safeParse({ ...libroValido, precio: -5 });

        expect(r.success).toBe(false);
        if (!r.success) expect(r.error.issues[0].path).toEqual(["precio"]);
    });

    it("Recorta espacios del título", () => {
        const r = libroCreateSchema.safeParse({ ...libroValido, titulo: "  Can't Hurt Me  " });

        if(r.success) expect(r.data.titulo).toBe("Can't Hurt Me");
    });

});

describe("idParamSchema", () => {

  it("Valida id como número", () => {
    const parametro = { id: "42" };
    const r = idParamSchema.safeParse(parametro);

    expect(r.success).toBe(true);
    if (r.success) expect(r.data.id).toBe(42);
  });

});