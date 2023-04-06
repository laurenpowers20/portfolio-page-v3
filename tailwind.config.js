/** @type {import('tailwindcss').Config} */
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
      colors: {
        neonYellow: {
          500: "#fbff12",
        },
        neonPink: {
          500: "#FF206E",
        },
        neonBlue: {
          500: "#41EAD4",
        },
      },
      fontFamily: {
        latoReg: "latoReg",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     colors: {
//       neonYellow: "#FBFF12",
//       neonPink: "#FF206E",
//       neonBlue: "#41EAD4",
//     },
//   },
// };

// export const plugins = [];

// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./app/**/*.{js,ts,jsx,tsx}",
//   "./pages/**/*.{js,ts,jsx,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",

//   // Or if using `src` directory:
//   "./src/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//   extend: {
//     fontFamily: {
//       latoReg: "latoReg",
//     },
//   },
// };
