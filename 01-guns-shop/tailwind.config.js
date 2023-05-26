/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c6690b",

          secondary: "#afb3f7",

          accent: "#22d868",

          neutral: "#27172B",

          "base-100": "#282745",

          info: "#7191D6",

          success: "#155B56",

          warning: "#EAC01A",

          error: "#E86759",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
