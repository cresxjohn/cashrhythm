/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#F7F7F7",
        foreground: "#17201B",
        "color-primary": "#1CB53B",
        "color-success": "#00B728",
        "color-warning": "#FF7A00",
        "color-danger": "#F00",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    screens: {
      "mobile-xs": "320px",
      "mobile-m": "375px",
      "mobile-l": "425px",
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      xxl: "1440px", // => @media (min-width: 1440px) { ... }
      "3xl": "1680px", // => @media (min-width: 1680px) { ... }
      "4xl": "1920px", // => @media (min-width: 1920px) { ... }
      "5xl": "2560px", // => @media (min-width: 1920px) px{ ... }
    },
  },
  plugins: [],
};
