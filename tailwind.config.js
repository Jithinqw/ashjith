/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    extend: {
      animation: {
        blob: "blob 4s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px -50px) scale(1.2)"
          },
          "66%": {
            transform: "translate(-20px 20px) scale(0.8)"
          },
          "100%": {
            transform: "translate(0px 0px) scale(1)"
          }
        },
      },
      rotate: {
        '207': '207deg'
      },
      zIndex: {
        '100': '100'
      }
    },
  },
  plugins: [],
}

