/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
      'hero': '#fbf8f3',
      'main': '#4d13d1'
    },
    },
  },
  plugins: [],
}

