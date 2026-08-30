import express from "express";
import libroRoutes from "./routes/libro.routes";
import autorRoutes from "./routes/autor.routes";

import { z } from "zod";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = 3000;

app.use(express.json());
z.config(z.locales.es())

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería | Hello world!" });
});

app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});