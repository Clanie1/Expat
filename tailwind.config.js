/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      'cover-pic':'135%'
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'primary-blue': '#010C1EFF',
        'sec-blue': '#06356FFF',
        'primary-gray': '#1E1E1EFF'
      },
    },
  },
  plugins: [
  ],
};
