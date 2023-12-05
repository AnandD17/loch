/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white1:"#F2F2F2",
        text5:"#1D2129",
        gray:{
          900:"#19191A",
          800:"#313233",
          400:'#96979A',
          300:'#B0B1B3',
          200:"#CACBCC",
          100:"#E5E5E6"
        },
        neutral:{
          300:"#D4D4D4"
        }
      }
    },
  },
  plugins: [],
}

