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
        brand: {
          50:  "#edf2fb",
          100: "#d8e4f6",
          200: "#b3ccee",
          300: "#7fabdf",
          400: "#4883cc",
          500: "#2b65b0",
          600: "#1A3A6B", // UNIQUE ENGINEERS Primary Navy Blue (from logo)
          700: "#152f56",
          800: "#102444",
          900: "#0c1c35",
          950: "#071020", // Deep ink navy
        },
        safety: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

