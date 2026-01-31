import cors from "cors";
import express from "express";
import { loadPredictionRouter } from "./routes/loadPrediction.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/load-prediction", loadPredictionRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`  GET /api/load-prediction?routeId=<id>`);
  console.log(`  GET /health`);
});
