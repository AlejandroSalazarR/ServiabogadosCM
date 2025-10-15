/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik Microbe', 'cursive'],
        'montserrat': ['Montserrat Alternates', 'sans-serif'],
        'bowlby': ['Bowlby One SC', 'cursive'],
        'sail': ['Sail', 'cursive'],
        
      },
      
    },
    backgroundImage: {
      'pack-train': "url('assets/banner2.jpg')",
    },
  },
  plugins: [],
}
