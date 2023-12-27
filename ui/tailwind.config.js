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
      keyframes: {
        'spin-loading': {
          '0%, 25%': { transform: 'rotate(0deg)' },
          '75%, 100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-loading': 'spin-loading 1000ms ease-in-out infinite',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
