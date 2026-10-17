import type { Config } from "tailwindcss";

// Tokens de design da CS Group. Alterar aqui muda o site todo.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carvao: "#1c1d1f",
        osso: "#f6f4ef",
        mineral: "#6b6e70",
        bruma: "#e4e2dc",
        areia: "#a89270",
        "areia-escura": "#7d6a4b",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "80rem" },
      transitionDuration: { base: "250ms" },
    },
  },
  plugins: [],
};
export default config;
