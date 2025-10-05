import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          500: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6",
        },
        app: {
          dark: "#0F1724",
          light: "#F8FAFC",
        },
       
        surface: {
          dark: "#1E293B",
          light: "#FFFFFF",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },

      boxShadow: {
        "soft-lg": "0 10px 30px -15px rgba(2, 6, 23, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;

