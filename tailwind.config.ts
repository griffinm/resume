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
        // Base colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Blue palette
        blue: {
          50: "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
        },
        
        // Purple palette
        purple: {
          50: "var(--color-purple-50)",
          100: "var(--color-purple-100)",
          500: "var(--color-purple-500)",
          600: "var(--color-purple-600)",
          700: "var(--color-purple-700)",
          800: "var(--color-purple-800)",
        },
        
        // Green palette
        green: {
          50: "var(--color-green-50)",
          100: "var(--color-green-100)",
          500: "var(--color-green-500)",
          600: "var(--color-green-600)",
          700: "var(--color-green-700)",
          800: "var(--color-green-800)",
        },
        
        // Orange palette (NEW)
        orange: {
          50: "var(--color-orange-50)",
          100: "var(--color-orange-100)",
          500: "var(--color-orange-500)",
          600: "var(--color-orange-600)",
          700: "var(--color-orange-700)",
          800: "var(--color-orange-800)",
        },
        
        // Teal palette (NEW)
        teal: {
          50: "var(--color-teal-50)",
          100: "var(--color-teal-100)",
          500: "var(--color-teal-500)",
          600: "var(--color-teal-600)",
          700: "var(--color-teal-700)",
          800: "var(--color-teal-800)",
        },
        
        // Pink palette (NEW)
        pink: {
          50: "var(--color-pink-50)",
          100: "var(--color-pink-100)",
          500: "var(--color-pink-500)",
          600: "var(--color-pink-600)",
          700: "var(--color-pink-700)",
          800: "var(--color-pink-800)",
        },
        
        // Indigo palette (NEW)
        indigo: {
          50: "var(--color-indigo-50)",
          100: "var(--color-indigo-100)",
          500: "var(--color-indigo-500)",
          600: "var(--color-indigo-600)",
          700: "var(--color-indigo-700)",
          800: "var(--color-indigo-800)",
        },
        
        // Gray palette
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

