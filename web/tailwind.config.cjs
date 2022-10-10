/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['inter', 'sans-serif']
    },
    extend: {

      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradiente' : 'linear-gradient(90deg, #9572FC 20.08%, #43E7AD 89.94%, #E1D55D 30.57%)',
        'game-gradiente' : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}
