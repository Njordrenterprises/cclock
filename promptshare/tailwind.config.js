/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "synthwave"],
  },
  purge: {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['theme-transition', 'bg-base-300', 'text-primary']
    }
  }
}