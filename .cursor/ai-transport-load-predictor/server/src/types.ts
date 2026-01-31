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
