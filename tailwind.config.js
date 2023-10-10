/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../cliente/src/componentes/**/*.{js,jsx,ts,tsx}", // Archivos JavaScript y JSX en la carpeta "componentes"
    "../cliente/src/redux/**/*.{js,jsx,ts,tsx}", // Archivos JavaScript y JSX en la carpeta "redux"
    "../cliente/src/reviews/**/*.{js,jsx,ts,tsx}", // Archivos JavaScript y JSX en la carpeta "reviews"
    "../cliente/index.html", // El archivo HTML principal de tu aplicación en la carpeta "cliente/public"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
