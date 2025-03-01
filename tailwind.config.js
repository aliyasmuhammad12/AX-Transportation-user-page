/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prosto: ["Prosto One", "serif"],
        poppins:["Poppins", "serif"]
      },
      boxShadow:{
        boxshadow: '0px 100.56px 142.64px -57.06px #193A4B4D'
      }
    },
  },
  plugins: [],
};
