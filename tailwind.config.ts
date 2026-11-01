import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        obsidian: {
          900: "#0A0A0A",
          950: "#050505",
        },
        neon: {
          yellow: "#FFE600",
          cyan: "#00E5FF",
          glowYellow: "rgba(255, 230, 0, 0.4)",
          glowCyan: "rgba(0, 229, 255, 0.4)",
        },
      },
      fontFamily: {
        heading: ["Orbitron", "system-ui", "-apple-system", "sans-serif"],
        body: ["Space Grotesk", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 229, 255, 0.4)",
        "glow-yellow": "0 0 25px -5px rgba(255, 230, 0, 0.4)",
        "glow-both": "0 0 35px -5px rgba(0, 229, 255, 0.3), 0 0 20px -2px rgba(255, 230, 0, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      backgroundImage: {
        "cyber-grid": "radial-gradient(circle, rgba(0, 229, 255, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
