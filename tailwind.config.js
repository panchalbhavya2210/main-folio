export default {
  plugins: [],
  theme: {
    screens: {
      md: { max: "768px" },
      lg: { max: "991px" },
      lgmin: { min: "991px" },
      xl: { min: "992px", max: "1500px" },
      "2xl": { min: "1700px" },
      sm: { max: "575px" },
    },
    colors: {
      "primary-color": "#164BDC",
      "secondary-color": "#7197FF",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
        20: "70px",
      },
      fontSize: {
        "header-font": "64px",
        "sub-header-font": "74px",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};
