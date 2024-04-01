module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comic Neue", "Arial", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
