/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      helvetica: 'Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
        text: '#B4B4B7',
        input: '#d4d4d9',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
