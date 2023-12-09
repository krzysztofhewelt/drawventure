/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF0E4',
        primary: '#FF8551',
        primaryLight: '#FFEDD8',
        secondary: '#9BCDD2',
      },
      borderRadius: {
        normal: '10px',
      },
      boxShadow: {
        extra: '0px 4px 5px 0px #00000040',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
