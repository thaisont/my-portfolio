module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#069",
      secondary: "#343a40",
      danger: "#e3342f",
    }),
    textColor: {
      primary: "#069",
      secondary: "#343a40",
      tertiary: "#506370",
      white: "#eeee",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
