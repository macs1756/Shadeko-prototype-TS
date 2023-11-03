/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '200': '200px',
      },
      gridTemplateColumns: {
        '25-75': '0.25fr 0.75fr',
      }
    },
  },
  plugins: [],
}
