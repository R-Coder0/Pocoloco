/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'swanky': ['"Fontdiner Swanky"', 'serif'],
        'fontdinerdotcom': ['Fontdinerdotcom Huggable', 'sans-serif'],
        'baby-gemoy': ['"Baby Gemoy"', 'sans-serif'],
        'Montserrat':['Montserrat', 'sans-serif'],
        'Xiaomi':['Xiaomi','sans-serif'],
        'Absortile-Bold':['Absortile-Bold','sans-serif']
      }
    },
  },
  plugins: [],
}

