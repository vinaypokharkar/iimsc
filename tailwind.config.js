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
        'primary-blue': '#5454D4',
      },
      fontFamily: {
        'instrumental-sans': ['var(--font-instrumental-sans)', 'sans-serif'],
        'display': ['var(--font-display)', 'serif'],
      },
    },
  },
  plugins: [],
};
