/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./e2e-app/src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "660px",

        md: "845px",

        lg: "860px",

        xl: "1200px",
      },
    },
  },
  plugins: [],
  important: true,
};
