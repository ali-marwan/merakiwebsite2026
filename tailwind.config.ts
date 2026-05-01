import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#FAF8F4",
        sand: "#F2EFE9",
        ink: {
          50: "#F4F2EC",
          100: "#E7E4DB",
          200: "#C9C5B8",
          400: "#5C6473",
          600: "#2A3346",
          700: "#1A2235",
          800: "#111827",
          900: "#0E1626",
          950: "#080E1A",
        },
        bronze: {
          50: "#F8F1E6",
          100: "#EFE0C5",
          200: "#E2C896",
          300: "#D2AE6A",
          400: "#C19858",
          500: "#A88149",
          600: "#8B6938",
          700: "#6E512B",
        },
      },
      fontFamily: {
        display: ['var(--font-instrument)', "ui-serif", "Georgia", "serif"],
        sans: ['var(--font-inter)', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14, 22, 38, 0.04), 0 8px 24px rgba(14, 22, 38, 0.06)",
        ring: "0 0 0 1px rgba(14, 22, 38, 0.08)",
        glow: "0 20px 60px -20px rgba(193, 152, 88, 0.45)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(14,22,38,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,22,38,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(193,152,88,0.10), transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
