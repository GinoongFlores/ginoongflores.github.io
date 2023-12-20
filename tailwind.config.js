/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

