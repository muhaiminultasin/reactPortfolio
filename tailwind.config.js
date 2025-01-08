import  { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF014D", 
        secondary:"#C4CFDE",
        white: "#FFFFFF", 
        darkPrimary:"#1F2125",
        darkSecondary:"#212428",
        formDark:"#191B1E",
        tabsBg: '#3f3f46',
      },

      boxShadow:{
        'custom-dark': '0 7px 10px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

