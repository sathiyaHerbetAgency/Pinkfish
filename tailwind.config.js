/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        "ticket-title-image": "url('/public/PFA/title_ticket_bg.png')"
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
