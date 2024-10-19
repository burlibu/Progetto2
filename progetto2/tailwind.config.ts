import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'f3f1ec': '#f3f1ec',
        '800000': '#800000',
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};

export default config;
