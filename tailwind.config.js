/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      '4xl': {'max': '2560px'},
      // => @media (max-width: 2560px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'sm1': {'max': '425px'},
      'sm2': {'max': '375px'},
      'sm3': {'max': '320px'},



    },
    extend: {
      width:{
        // clamp: "(14rem, 50%, 20rem)",
      },
    },
  },
  plugins: [],
}

