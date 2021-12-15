module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular Regular"],
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
}
