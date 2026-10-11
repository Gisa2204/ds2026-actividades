import { prisma } from "../config/prisma";
import { describe, it, expect, vi, afterAll } from "vitest";
import request from "supertest";
import app from "../app";

afterAll(() => prisma.$disconnect()); //Cerrar la conexión al terminar

it("Responde 200 con usuarios con credenciales del seed", async () => {
  const res = await request(app).post("/api/auth/login")
    .send({ email: "cliente@libreria.test", password: "Cliente1234" });

  expect(res.status).toBe(200);
  expect(res.body.token).toEqual(expect.any(String));
  expect(res.body.usuario).toMatchObject({ email: "cliente@libreria.test", rol: "CLIENTE" });
  expect(res.body.usuario).not.toHaveProperty("passwordHash");
});

it("Responde 401 a un mail que no existe y se intenta logear", async () => {
  const res = await request(app).post("/api/auth/login")
    .send({ email: "nadie@libreria.test", password: "Cliente1234" });
    
  expect(res.body).toEqual({ error: "Credenciales inválidas" });
  expect(res.status).toBe(401);
});