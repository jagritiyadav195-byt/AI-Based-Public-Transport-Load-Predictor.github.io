import { GraduationCap, Github, Mail, MapPin, TrainFront } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#live-map", label: "Live Map" },
  { href: "#predictions", label: "Predictions" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Student & College */}
          <div className="space-y-4 lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-lg text-slate-100">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-electric-blue/15 ring-1 ring-electric-blue/30">
                <GraduationCap className="h-5 w-5 text-electric-blue" />
              </span>
              <span className="font-semibold">
                Jagriti <span className="text-electric-blue">Yadav</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Mini Project student at{" "}
              <span className="font-medium text-slate-300">
                Thakur College of Engineering and Technology
              </span>
              .
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-electric-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / resources placeholder */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-electric-blue"
                >
                  <MapPin className="h-4 w-4" />
                  Live Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-electric-blue"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-electric-blue"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </li>
            </ul>
          </div>

          {/* Dev note */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 lg:col-span-1">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              For developers
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Replace the mock in{" "}
              <code className="rounded bg-slate-800/80 px-1 py-0.5 font-mono text-slate-300">
                services/transportService.ts
              </code>{" "}
              when your backend is ready.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-300">Jagriti Yadav</span>
            {" "}• Mini Project student at{" "}
            <span className="text-slate-400">Thakur College of Engineering and Technology</span>
          </p>
          <p className="text-xs text-slate-500">
            AI Public Transport Load Predictor • React, Tailwind & Lucide
          </p>
        </div>
      </div>
    </footer>
  );
}
