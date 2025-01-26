/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aquamarine: '#58b294',
        mediumpurple: '#9370db',
      },
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities={
        ".no-scrollbar::-webkit-scrollbar":{display:"none",},
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };
      addUtilities(newUtilities);
    }
  ],
};
