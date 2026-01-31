import { Activity, MapPin, Radar, TrainFront } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: Activity },
  { href: "#live-map", label: "Live Map", icon: MapPin },
  { href: "#predictions", label: "Predictions", icon: Radar },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      {/* Top bar: branding + tagline */}
      <div className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:py-3">
          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-lg px-2 py-1 text-slate-100 hover:opacity-90"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-blue/15 ring-1 ring-electric-blue/30 transition group-hover:ring-electric-blue/50">
              <TrainFront className="h-5 w-5 text-electric-blue" />
            </span>
            <div className="min-w-0">
              <div className="font-bold tracking-tight text-slate-50">
                AI Public Transport{" "}
                <span className="text-electric-blue">Load Predictor</span>
              </div>
              <div className="text-xs text-slate-400 sm:text-sm">
                Urban Tech • Real-time occupancy insights
              </div>
            </div>
          </a>

          <a
            href="#predictions"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-electric-blue px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric-blue/20 transition hover:bg-electric-blue/90 sm:self-center"
          >
            Check Live Load
            <span className="rounded-md bg-white/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wide">
              BETA
            </span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-center gap-1 px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-slate-50"
            >
              <Icon className="h-4 w-4 text-slate-400" />
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
