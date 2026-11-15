import { it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authenticate, authorize } from "./auth.middleware";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

function mocks(req: Partial<Request> = {}) {
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn().mockReturnThis() } as unknown as Response;
  const next = vi.fn() as unknown as NextFunction;
  return { req: req as Request, res: res as Response, next };
}

it("Llama a next() si el usuario tiene el rol requerido", () => {
  const { req, res, next } = mocks({ usuario: { id: 1, rol: "ADMIN" } });
  
  authorize("ADMIN")(req, res, next);
  
  expect(next).toHaveBeenCalledTimes(1);
  expect(res.status).not.toHaveBeenCalled();
});

it("Responde 401 'No autenticado' si req.usuario es undefined", () => {
  const { req, res, next } = mocks(); 
  
  authorize("ADMIN")(req, res, next);
  
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({ error: "No autenticado" });
});

it("Responde 403 a un CLIENTE cuando la ruta pide ADMIN", () => {
  const { req, res, next } = mocks({ usuario: { id: 2, rol: "CLIENTE" } });

  authorize("ADMIN")(req, res, next);

  expect(res.status).toHaveBeenCalledWith(403);
  expect(next).not.toHaveBeenCalled();
});

it("Llena req.usuario con un token válido y llama a next", () => {
  const token = jwt.sign({ id: 7, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "1h" });
  const { req, res, next } = mocks({ headers: { authorization: `Bearer ${token}` } });

  authenticate(req, res, next);

  expect(next).toHaveBeenCalledTimes(1);
  expect(req.usuario).toEqual({ id: 7, rol: "CLIENTE" });
});

it("Responde 401 'Token expirado' al mandar un token vencido", () => {
  const token = jwt.sign({ id: 7, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "-1s" });
  const { req, res, next } = mocks({ headers: { authorization: `Bearer ${token}` } });

  authenticate(req, res, next);

  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({ error: "Token expirado" });
});

it("Responde 401 'Falta el token' si no hay header de authorization", () => {
  const { req, res, next } = mocks({ headers: {} });
  authenticate(req, res, next);

  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({ error: "Falta el token" });
});

it("Responde 401 'Token inválido' si el token fue modificado", () => {
  const tokenFalso = jwt.sign({ id: 1, rol: "ADMIN" }, "otro-secret", { expiresIn: "1h" });
  const { req, res, next } = mocks({ headers: { authorization: `Bearer ${tokenFalso}` } });
  
  authenticate(req, res, next);
  
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({ error: "Token inválido" });
});