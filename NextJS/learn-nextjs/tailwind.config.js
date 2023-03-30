/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontSize: {
      '2xsm': '10px',
      xsm: '12px',
      sm: '14px',
      reg: '16px',
      lg: '18px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '48px',
      '7xl': '56px',
      '8xl': '72px',
    },
  },
  plugins: [],
};
