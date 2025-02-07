/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aquamarine: "#58b294",
        mediumpurple: "#9370db",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
        mono: ["var(--font-fira)"],
      },
      fontSize: {
        "heading-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1" }],
        "heading-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2" }],
        "heading-md": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.4" }], // Slightly larger paragraph text
        body: ["1.05rem", { lineHeight: "1.4" }], // Standard paragraph text
        "body-sm": ["0.875rem", { lineHeight: "1.4" }], // Small paragraph text
        code: ["0.875rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
