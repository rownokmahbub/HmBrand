module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3ed8ef",

          "secondary": "#fcf22f",

          "accent": "#cad62a",

          "neutral": "#2E2C3A",

          "base-100": "#ffffff",

          "info": "#82BEF3",

          "success": "#28CC6D",

          "warning": "#FCD527",

          "error": "#F9104E",
        },
      },
    ],
  },
  theme: {

    extend: {
      colors: {
        bg: {
          DEFAULT: "#d1826e",
          200: "#272727",
          300: "#2e2e2e",
        },
        primary: {
          DEFAULT: "#d1826e",
          50: "#8d8565",
          100: "#F5B4B4",
          200: "#F09090",
          300: "#EC6C6C",
          400: "#E74848",
          500: "#DA1E37",
          600: "#B61818",
          700: "#841212",
          800: "#530B0B",
          900: "#210404",
        },
      },
    },
  },
  plugins: [ require('daisyui'),],
}
