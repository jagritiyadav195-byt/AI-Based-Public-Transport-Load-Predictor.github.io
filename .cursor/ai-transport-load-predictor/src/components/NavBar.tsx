import { Activity, MapPin, Radar, TrainFront } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: Activity },
  { href: "#live-map", label: "Live Map", icon: MapPin },
  { href: "#predictions", label: "Predictions", icon: Radar },
] as const;

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-slate-100 hover:bg-white/5"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-electric-blue/15 ring-1 ring-electric-blue/30">
            <TrainFront className="h-5 w-5 text-electric-blue" />
          </span>
          <span>
            AI Load
            <span className="text-electric-blue"> Predictor</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-slate-50"
              >
                <Icon className="h-4 w-4 text-slate-400" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#predictions"
          className="inline-flex items-center gap-2 rounded-lg bg-electric-blue px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-electric-blue/20 hover:bg-electric-blue/90"
        >
          Check Live Load
          <span className="rounded-md bg-white/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wide">
            BETA
          </span>
        </a>
      </div>
    </header>
  );
}

