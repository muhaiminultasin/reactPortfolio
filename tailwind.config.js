const {nextui} = require("@nextui-org/react");

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
        primary: "#F9E79F", 
        Peragraph: "gray-300", 
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

