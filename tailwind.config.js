const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        modernAntiqua: ['Modern Antiqua', ...fontFamily.sans],
        exoRegular: ['Exo Regular', ...fontFamily.sans],
        exoMedium: ['Exo Medium', ...fontFamily.sans],
        exoSemiBold: ['Exo SemiBold', ...fontFamily.sans],
        exoBold: ['Exo Bold', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
