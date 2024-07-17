module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      keyframes: {
        slide: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(100px)"}
        },
        animation: {
          slide: "slide 2s ease-in-out"
        },
        colors: {
          olivedrab: '#6B8E23',
        }
      }
    },
  },
  plugins: [],
};