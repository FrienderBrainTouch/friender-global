/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts}', './error.vue'],
  theme: {
    extend: {
      colors: {
        friender: {
          dark: '#28332F',
          primary: '#395E00',
          darkest: '#152017',
        },
      },
      fontFamily: {
        sans: ['LaundryGothic', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        laundry: ['LaundryGothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
