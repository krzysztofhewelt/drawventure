/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        normal: '10px',
      },
      colors: {
        background: '#FAF0E4',
        primary: '#FF8551',
        primaryHigh: '#FFEDD8',
        secondary: '#9BCDD2',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
