const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
    require("daisyui"),
  ],


};

module.exports = config;

 

