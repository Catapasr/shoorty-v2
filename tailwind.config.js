module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0px 8px 14px -2px rgba(94, 198, 232, 0.4), 0px 2px 4px -2px rgba(94, 198, 232, 0.5)",
      },
    },
    variants: {
      fill: ["hover", "focus"], // this line does the trick
    },
  },
  plugins: [],
};
