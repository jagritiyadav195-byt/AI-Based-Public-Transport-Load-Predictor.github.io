import { Router, type Request, type Response } from "express";
import { computeLoadPrediction } from "../services/predictionService.js";

export const loadPredictionRouter = Router();

/**
 * GET /api/load-prediction?routeId=B12
 * Returns load prediction for the given bus/train route.
 */
loadPredictionRouter.get("/", (req: Request, res: Response) => {
  const routeId = req.query.routeId;
  if (typeof routeId !== "string" || !routeId.trim()) {
    res.status(400).json({
      error: "Missing or invalid routeId",
      message: "Please provide a routeId query parameter (e.g. ?routeId=B12)",
    });
    return;
  }

  // Simulated error for testing (e.g. routeId "error")
  if (routeId.trim().toLowerCase() === "error") {
    res.status(503).json({
      error: "Service temporarily unavailable",
      message: "Try again in a moment.",
    });
    return;
  }

  try {
    const prediction = computeLoadPrediction(routeId);
    res.json(prediction);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(400).json({ error: "Bad request", message });
  }
});
