/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#722ED1',
    },
    fontFamily : {
      sans: ['Metropolis', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}