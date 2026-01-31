import { Map, Waves } from "lucide-react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LiveMap } from "./components/LiveMap";
import { RouteSearch } from "./components/RouteSearch";

export default function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Header />
      <main>
        <Hero />

        <section id="live-map" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-wide text-slate-400">
                  LIVE MAP
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
                  Live corridor view
                </h2>
                <p className="mt-2 max-w-prose text-sm text-slate-300">
                  OpenStreetMap view. Add real-time vehicle positions or route overlays when your backend is ready.
                </p>
              </div>
              <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 md:inline-flex">
                <Waves className="h-4 w-4 text-emerald-accent" />
                Streaming-ready layout
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Map className="h-4 w-4 text-electric-blue" />
                  Map
                </div>
                <div className="text-xs text-slate-400">
                  Pan & zoom • Click marker for info
                </div>
              </div>

              <div className="mt-4">
                <LiveMap />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs font-semibold text-slate-400">Heat</div>
                  <div className="mt-1 text-sm text-slate-200">
                    Capacity-based coloring
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs font-semibold text-slate-400">
                    Vehicles
                  </div>
                  <div className="mt-1 text-sm text-slate-200">
                    Live positions & ETA
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs font-semibold text-slate-400">
                    Alerts
                  </div>
                  <div className="mt-1 text-sm text-slate-200">
                    Disruptions & reroutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RouteSearch />
      </main>

      <Footer />
    </div>
  );
}

