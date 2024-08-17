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
        primary: {
          DEFAULT: '#7ed56f',
          light: '#55c57a',
          dark: '#28b485',
        },
        secondary: {
          light: '#ffb900',
          dark: '#ff7730',
        },
        tertiary: {
          light: '#2998ff',
          dark: '#5643fa',
        },
        grey: {
          light: {
            1: '#f7f7f7',
            2: '#eee',
          },
          dark: '#777',
        },
      },
      fontSize: {
        'default': '1.6rem',
      },
      width: {
        'grid': '114rem',
      },
      spacing: {
        'gutter-vertical': '8rem',
        'gutter-horizontal': '6rem',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
