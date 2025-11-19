/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#33348d',
      },
      fontFamily: {
        'instrumental-sans': ['var(--font-instrumental-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
