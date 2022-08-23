/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#24282C",
        "custom-white": "#fbfbf8",
        "custom-white-2": "#EAE9E2",
        "custom-green": "#D3F36A",
        "custom-blue": "#CDDFE3",
      },
      boxShadow: {
        "material-shadow":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
    },
  },
  plugins: [],
};
