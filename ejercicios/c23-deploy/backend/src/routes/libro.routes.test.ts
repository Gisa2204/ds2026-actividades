import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";
import { it, expect } from "vitest";

const libroNuevo = { titulo: "Can't Hurt Me", precio: 10, imagen: "https://img/Cant_hurt_me.jpg", autorId: 1 };

const tokenCliente = jwt.sign({ id: 2, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "1h" });
const tokenAdmin   = jwt.sign({ id: 1, rol: "ADMIN" },   JWT_SECRET, { expiresIn: "1h" });

it("Responde 403 con token de CLIENTE", async () => {
  const res = await request(app).post("/api/libros")
    .set("Authorization", `Bearer ${tokenCliente}`).send(libroNuevo);

  expect(res.status).toBe(403);
});

it("Responde 400 a ADMIN con body inválido", async () => {
  const res = await request(app).post("/api/libros")
    .set("Authorization", `Bearer ${tokenAdmin}`).send({ precio: -5 });
    
  expect(res.status).toBe(400);
  expect(res.body.detalles).toContainEqual({ campo: "precio", mensaje: "El precio debe ser mayor a 0" });
});