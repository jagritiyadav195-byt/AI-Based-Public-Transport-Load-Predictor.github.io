import { AlertTriangle, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { getLoadPrediction, type LoadPrediction } from "../services/transportService";
import { LoadingSpinner } from "./LoadingSpinner";
import { PredictionCard } from "./PredictionCard";

type ViewState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "success"; data: LoadPrediction };

export function RouteSearch() {
  const [routeId, setRouteId] = useState("");
  const [state, setState] = useState<ViewState>({ kind: "idle" });

  const canSubmit = useMemo(() => routeId.trim().length > 0 && state.kind !== "loading", [routeId, state.kind]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState({ kind: "loading" });
    try {
      const data = await getLoadPrediction(routeId);
      setState({ kind: "success", data });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setState({ kind: "error", message });
    }
  }

  return (
    <section id="predictions" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold tracking-wide text-slate-400">
              PREDICTIONS
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              Check route load in seconds
            </h2>
            <p className="mt-2 max-w-prose text-sm text-slate-300">
              Enter a bus/train route ID. The UI is wired for backend integration—swap the mock service when your API is ready.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40"
          >
            <label className="text-sm font-semibold text-slate-100">
              Bus/Train Route ID
            </label>
            <div className="mt-3 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  value={routeId}
                  onChange={(e) => setRouteId(e.target.value)}
                  placeholder="e.g., B12, T7, Metro-Blue"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/40 pl-9 pr-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 focus:border-electric-blue/40 focus:ring-2 focus:ring-electric-blue/20"
                />
              </div>
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-electric-blue px-4 text-sm font-semibold text-white shadow-sm shadow-electric-blue/20 hover:bg-electric-blue/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.kind === "loading" ? "Checking..." : "Predict"}
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                Tip: enter <span className="font-semibold text-slate-300">error</span> to preview the error state.
              </div>
              {state.kind === "loading" ? <LoadingSpinner label="Fetching prediction" /> : null}
            </div>

            {state.kind === "error" ? (
              <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-red-200" />
                  <div>
                    <div className="font-semibold">Couldn’t fetch prediction</div>
                    <div className="mt-1 text-red-100/90">{state.message}</div>
                  </div>
                </div>
              </div>
            ) : null}
          </form>

          <div className="min-h-[240px]">
            {state.kind === "idle" ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 p-8 text-center">
                <div className="max-w-md">
                  <div className="text-sm font-semibold text-slate-100">
                    Your prediction will appear here
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    Enter a route ID to see current capacity and a short-term predicted load status.
                  </div>
                </div>
              </div>
            ) : null}

            {state.kind === "loading" ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
                <LoadingSpinner label="Running model…" />
              </div>
            ) : null}

            {state.kind === "success" ? <PredictionCard data={state.data} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

