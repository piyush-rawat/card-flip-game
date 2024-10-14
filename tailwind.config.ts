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
        c: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: "",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      primary: ["var(--font-luckiestGuy)", "sans-serif"],
      nable: ["var(--font-nabla)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
