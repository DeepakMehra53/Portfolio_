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
          transform: "translate3d(0px, 0 % , 0px) scale3d(1, 1, 1) rotate(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform - style: preserve - 3d;"
        }
      })
    }
  ],
}

