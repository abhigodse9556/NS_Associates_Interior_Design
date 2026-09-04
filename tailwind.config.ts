import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#1a1714",
        "canvas-mid": "#221f1b",
        "canvas-raised": "#2d2924",
        stone: "#c9b99a",
        "stone-dim": "#8a7d6b",
        cream: "#f2ece0",
        bronze: "#a67c52",
        rule: "rgba(201, 185, 154, 0.15)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Instrument Sans", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
