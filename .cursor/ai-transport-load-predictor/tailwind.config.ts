import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "urban-navy": "#070B1A",
        "electric-blue": "#2B7BFF",
        "emerald-accent": "#10B981"
      }
    }
  },
  plugins: [],
} satisfies Config;

