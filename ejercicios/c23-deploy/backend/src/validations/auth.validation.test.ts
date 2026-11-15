import { describe, it, expect } from "vitest";
import { loginSchema, registroSchema } from "./auth.validation";

describe("loginSchema", () => {

  it("Normaliza el email: saca espacios y pasa a minúsculas", () => {
    const r = loginSchema.safeParse({ email: "  Admin@Libreria.TEST ", password: "x" });

    expect(r.success).toBe(true);
    if (r.success) expect(r.data.email).toBe("admin@libreria.test");
  });

});

describe("registroSchema", () => {

  it("Acumula los tres errores de una contraseña débil", () => {
    const r = registroSchema.safeParse({ nombre: "Gino", email: "gino@libreria.test", password: "corta" });
    if (!r.success) expect(r.error.issues.map(i => i.message)).toHaveLength(3);
  });

});