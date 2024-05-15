/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@radix-ui/**/*.{js,jsx,ts,tsx}", // Include Radix UI files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
