/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9ef7ca",

          secondary: "#b18ee2",

          accent: "#959de2",

          neutral: "#1c2330",

          "base-100": "#dfe8ec",

          info: "#2cb7dd",

          success: "#117e5d",

          warning: "#8c570d",

          error: "#f96c88",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
