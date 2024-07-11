/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#de8bdc",
        customPink: "#dd57e0",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #de8bdc, #dd57e0)",
      },
    },
  },
  plugins: [],
};
