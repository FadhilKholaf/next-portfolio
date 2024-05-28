import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "mobile-sm": ["10px", "14px"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "pulse-slow": "pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "dark-sky": "url('/dark-sky.jpg')",
      },
      boxShadow: {
        "inner-xl": "inset 0 25px 50px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
