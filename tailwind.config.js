/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html, js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'rubik': ['Rubik', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'hero-image': "linear-gradient(to right bottom, rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url('./img_omnifood/hero.jpg')",
        'hero-natours': "linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 0.8)), url(/img_natours/hero.jpg)",
        'features-natours': "linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 0.8)), url(/img_natours/nat-4.jpg)",
        'cta-image': "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('./img_omnifood/eating.jpg')",
      }
    },
  },
  plugins: [],
}

