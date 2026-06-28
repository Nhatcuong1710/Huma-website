import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          950: "#060E1F",
          900: "#0B1E3F",
          800: "#102A55",
          700: "#15356B",
        },
        brand: {
          DEFAULT: "#1656D6",
          50: "#EEF4FF",
          100: "#DCE9FF",
          200: "#B4CFFF",
          300: "#7FACFF",
          400: "#4685FA",
          500: "#1656D6",
          600: "#1145AE",
          700: "#0D3787",
          800: "#0A2A66",
          900: "#081F4D",
        },
        cyan: {
          DEFAULT: "#33C7E8",
          400: "#5CD6F0",
          500: "#33C7E8",
          600: "#1CA9CC",
        },
        ink: {
          DEFAULT: "#0B1220",
          muted: "#475569",
          soft: "#64748B",
        },
        canvas: "#F7F9FC",
        line: "#E6EBF2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(115deg, #0B1E3F 0%, #1656D6 55%, #33C7E8 100%)",
        "brand-gradient-soft": "linear-gradient(115deg, #EEF4FF 0%, #DCE9FF 100%)",
        "mesh-dark": "radial-gradient(circle at 15% 20%, rgba(51,199,232,0.18), transparent 40%), radial-gradient(circle at 85% 0%, rgba(22,86,214,0.35), transparent 45%), linear-gradient(160deg,#060E1F 0%, #0B1E3F 60%, #102A55 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(11,30,63,0.08)",
        card: "0 8px 30px -8px rgba(11,30,63,0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px -20px rgba(22,86,214,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        dissolve: {
          "0%,100%": { opacity: "0.25", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        dissolve: "dissolve 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
