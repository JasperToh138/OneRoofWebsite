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
        ink: "#2f3d46",
        ocean: "#247db4",
        ember: "#60717d",
        mist: "#f3f8fc",
        leaf: "#247db4",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(47, 61, 70, 0.08)",
        glow: "0 18px 42px rgba(36, 125, 180, 0.22)",
        steel: "0 18px 48px rgba(96, 113, 125, 0.16)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(36, 125, 180, 0.34)" },
          "50%": { boxShadow: "0 0 0 10px rgba(36, 125, 180, 0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        floatSlow: "floatSlow 5s ease-in-out infinite",
        pulseRing: "pulseRing 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
