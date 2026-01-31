import type { LoadPrediction, PredictedLoadLevel } from "../types.js";

function clampPercent(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

/**
 * Compute load prediction for a route.
 * Replace this with real data sources: DB, GTFS-Realtime, ML model, etc.
 */
export function computeLoadPrediction(routeId: string): LoadPrediction {
  const trimmed = routeId.trim();
  if (!trimmed) {
    throw new Error("routeId is required");
  }

  // Deterministic mock from route id (replace with DB/API lookup)
  const base =
    trimmed.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 101;
  const currentCapacityPercent = clampPercent(45 + (base % 56));

  let level: PredictedLoadLevel = "Low";
  if (currentCapacityPercent >= 80) level = "High";
  else if (currentCapacityPercent >= 60) level = "Medium";

  const nextMins = 20;
  const predictedLevel: PredictedLoadLevel =
    level === "Low" ? "Medium" : level === "Medium" ? "High" : "High";

  return {
    routeId: trimmed,
    currentCapacityPercent,
    predictedLoad: { level: predictedLevel, nextMins },
    updatedAtIso: new Date().toISOString(),
  };
}
