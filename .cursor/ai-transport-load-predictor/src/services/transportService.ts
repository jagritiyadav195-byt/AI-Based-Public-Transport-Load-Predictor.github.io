export type PredictedLoadLevel = "Low" | "Medium" | "High";

export type LoadPrediction = {
  routeId: string;
  currentCapacityPercent: number;
  predictedLoad: {
    level: PredictedLoadLevel;
    nextMins: number;
  };
  updatedAtIso: string;
};

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function getLoadPrediction(routeId: string): Promise<LoadPrediction> {
  const trimmed = routeId.trim();
  if (!trimmed) {
    throw new Error("Please enter a Route ID (e.g., B12, T7, Metro-Blue).");
  }

  const url = `${API_BASE}/api/load-prediction?routeId=${encodeURIComponent(trimmed)}`;
  const res = await fetch(url);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      typeof body?.message === "string"
        ? body.message
        : body?.error ?? "Something went wrong. Please try again.";
    throw new Error(message);
  }

  const data = (await res.json()) as LoadPrediction;
  return data;
}
