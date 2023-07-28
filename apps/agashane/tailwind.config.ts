import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{astro,html,js,ts,jsx,tsx}",
    "./src/components/**/*.{astro,html,js,ts,jsx,tsx}",
    "./src/layouts/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Azaret Mono Variable",
          "Unbounded Variable",
          "Bellota",
          "sans-serif",
        ],
        mono: ["Azeret Mono Variable", "Unbounded Variable", "sans-serif"],
      },
    },
  },
  plugins: [require("rippleui")],
} satisfies Config;
