import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "./src/routes/health.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/health", healthRoutes);

// Porta padrão
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Kog.db backend rodando em http://localhost:${PORT}`);
});