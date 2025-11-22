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
        'brand-primary': '#5C4DFF',
        'brand-secondary': '#33348D',
        'brand-dark': '#1E1E1E',
      },
      fontFamily: {
        'instrumental-sans': ['var(--font-instrumental-sans)', 'sans-serif'],
        'display': ['var(--font-display)', 'serif'],
      },
    },
  },
  plugins: [],
};
