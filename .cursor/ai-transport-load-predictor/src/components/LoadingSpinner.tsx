import { Loader2 } from "lucide-react";

export function LoadingSpinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-slate-300">
      <Loader2 className="h-4 w-4 animate-spin text-electric-blue" />
      <span>{label}</span>
    </div>
  );
}

