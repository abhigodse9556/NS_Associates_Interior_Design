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
        canvas: "#ffffff",
        "canvas-mid": "#f7f7f7",
        "canvas-raised": "#ffffff",
        stone: "#111111",
        "stone-dim": "#737373",
        cream: "#111111",
        bronze: "#111111",
        rule: "rgba(17, 17, 17, 0.12)",
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
