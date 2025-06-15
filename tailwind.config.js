/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        fontFamily: {
  inter: ['Inter', 'sans-serif'],
  amoria: ['amoria', 'serif'],
  modern: ['modern', 'serif'],
},
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
    

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
