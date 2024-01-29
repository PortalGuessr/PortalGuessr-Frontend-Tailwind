/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Sixtyfour", "sans-serif"],
        body: ["Workbench", "sans-serif"],
      },
      colors: {
        text: "#d27484",
        background: "#362f6a",
        primary: "#9e4784",
        secondary: "#66347f",
        accent: "#cb3030",
        success: "#4caf50",
        warning: "#fedc56",
        danger: "#ff5733",
        info: "#36cbd3 ",
      },
    },
  },
  plugins: [],
};
