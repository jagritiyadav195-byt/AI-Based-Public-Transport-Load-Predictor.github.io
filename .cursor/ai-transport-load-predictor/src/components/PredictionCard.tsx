import { Gauge, TrendingUp } from "lucide-react";
import type { LoadPrediction, PredictedLoadLevel } from "../services/transportService";

function levelStyles(level: PredictedLoadLevel) {
  switch (level) {
    case "Low":
      return "bg-emerald-accent/15 text-emerald-200 ring-1 ring-emerald-accent/25";
    case "Medium":
      return "bg-yellow-500/15 text-yellow-200 ring-1 ring-yellow-500/25";
    case "High":
      return "bg-red-500/15 text-red-200 ring-1 ring-red-500/25";
  }
}

function capacityBarColor(pct: number) {
  if (pct >= 80) return "bg-red-500";
  if (pct >= 60) return "bg-yellow-500";
  return "bg-emerald-accent";
}

export function PredictionCard({ data }: { data: LoadPrediction }) {
  const cap = Math.max(0, Math.min(100, Math.round(data.currentCapacityPercent)));
  const predicted = data.predictedLoad;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-semibold tracking-wide text-slate-400">
            ROUTE ID
          </div>
          <div className="mt-1 text-lg font-bold text-slate-50">{data.routeId}</div>
        </div>

        <div className="inline-flex items-center gap-2">
          <span
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
              levelStyles(predicted.level),
            ].join(" ")}
          >
            <TrendingUp className="h-4 w-4" />
            {predicted.level} • Next {predicted.nextMins} mins
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
              <Gauge className="h-4 w-4 text-electric-blue" />
              Current Capacity
            </div>
            <div className="text-sm font-bold text-slate-50">{cap}%</div>
          </div>

          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
            <div
              className={["h-2 rounded-full", capacityBarColor(cap)].join(" ")}
              style={{ width: `${cap}%` }}
            />
          </div>

          <div className="mt-2 text-xs text-slate-400">
            Updated:{" "}
            <span className="text-slate-300">
              {new Date(data.updatedAtIso).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
          <div className="text-sm font-semibold text-slate-100">Predicted Load</div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span
              className={[
                "rounded-lg px-3 py-1 text-xs font-semibold",
                levelStyles("Low"),
              ].join(" ")}
            >
              Low
            </span>
            <span
              className={[
                "rounded-lg px-3 py-1 text-xs font-semibold",
                levelStyles("Medium"),
              ].join(" ")}
            >
              Medium
            </span>
            <span
              className={[
                "rounded-lg px-3 py-1 text-xs font-semibold",
                levelStyles("High"),
              ].join(" ")}
            >
              High
            </span>
          </div>

          <div className="mt-4 text-sm text-slate-300">
            Status:{" "}
            <span className="font-semibold text-slate-50">{predicted.level}</span>
            <span className="text-slate-400"> — next {predicted.nextMins} mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}

