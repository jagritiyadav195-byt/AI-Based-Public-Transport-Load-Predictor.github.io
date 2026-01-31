import { ArrowRight, Bot, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Sparkles className="h-4 w-4 text-electric-blue" />
            Urban Tech • Real-time occupancy insights
          </div>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-50 md:text-5xl">
            AI Public Transport{" "}
            <span className="text-electric-blue">Load Predictor</span>
          </h1>

          <p className="max-w-prose text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
            Predict crowding before you board. Enter a bus/train route ID and
            get current capacity plus an AI-based short-horizon load forecast.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#predictions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-blue/20 hover:bg-electric-blue/90"
            >
              Check Live Load
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-slate-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Bot className="h-5 w-5 text-emerald-accent" />
              </span>
              <span>
                Built for transit ops and commuters with a clean, fast workflow.
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-100">
                Corridor Snapshot
              </div>
              <div className="text-xs text-slate-400">Updated moments ago</div>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">Route</div>
                  <div className="text-sm font-semibold text-slate-50">
                    Metro-Blue
                  </div>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-[65%] rounded-full bg-electric-blue" />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Current Capacity</span>
                  <span className="font-semibold text-slate-200">65%</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-accent/15 ring-1 ring-emerald-accent/30">
                    <Sparkles className="h-5 w-5 text-emerald-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-50">
                      Prediction
                    </div>
                    <div className="text-xs text-slate-400">
                      High • next 20 mins
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-emerald-accent/15 px-2 py-2 text-emerald-200 ring-1 ring-emerald-accent/25">
                    Low
                  </div>
                  <div className="rounded-lg bg-yellow-500/15 px-2 py-2 text-yellow-200 ring-1 ring-yellow-500/25">
                    Medium
                  </div>
                  <div className="rounded-lg bg-red-500/15 px-2 py-2 text-red-200 ring-1 ring-red-500/25">
                    High
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-electric-blue/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

