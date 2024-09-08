/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne: ["Russon One"],
      },
      colors: {
        primary: "#E9EFEC",
        // secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "green-100": "#C4DAD2",
        "green-200": "#6A9C89",
        royalBlue: "#4169e1",
        darkBlue: "#0d1117",
        dark: "#0d1117",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg main.jpg')",
        'overlay': 'rgba(255, 255, 255, 0.5)', // Adjust color and 

      },
      backgroundColor: {
        'overlay': 'rgba(255, 255, 255, 0.5)', // Adjust color and 
        wrapperBg: "url('assets/images/wrapperBackground.svg')",
        wrapperDark: "url('assets/images/wrapperDark.svg')",
      },
    //     screens: {
    //   "2xl": { max: "1535px" },
    //   // => @media (max-width: 1535px) { ... }
    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }
    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }
    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }
    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }
    // },
    },
  },
  plugins: [],
};
