import { transform } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.custom-3d-transfrom':{
          transform: "translate3d(0px, 0% , 0px) scale3d(1, 1, 1) rotate(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
           transformStyle: "preserve - 3d",
        }
      })
    },
    function({addUtilities}){
      addUtilities({
        '.custom-3d-style':{
          transform: "translate3d(0px, 110%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg)",
          'transform-style': 'preserve-3d',
        }
      })
    },
    function ({ addUtilities }) {
      addUtilities({
        '.custom-3d-transfrom-1': {
          transform: "translate3d(0%, 0px , 0px) scale3d(1, 1, 1) rotate(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve - 3d"
        }
      })
    }
  ],
}

