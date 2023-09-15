// tailwind.config.cjs

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      width: {
        '128': '50em',
      },
    },
  },

  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography')
  ],
};

module.exports = config;