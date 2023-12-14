/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#7E90FE',
        'body': '#1C1E53',
        'bgShade':'#F5FCFF',
        'footerColor':'#1A1919',
      }
    },
  },
  plugins: [],
}

