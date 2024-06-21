import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#141414",
        "primary": "#4158D0",
        "secondary": "#D04158",
        "tertiary": "#58D041",
      }
    },
  },
  plugins: [],
};
export default config;
