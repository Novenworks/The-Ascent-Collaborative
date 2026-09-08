import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c1216",
        slate: "#141c22",
        line: "#2a353d",
        paper: "#e7e1d6",
        muted: "#9aa3aa",
        copper: "#c4a06a",
        copper2: "#d4b07a",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
