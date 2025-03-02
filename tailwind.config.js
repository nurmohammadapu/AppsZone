/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: "var(--font-preahvihear)",
        plusJakarta: "var(--font-plus-jakarta-sans)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
