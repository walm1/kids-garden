/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu:  ["Ubuntu", "sans-serif"]
    },
    size: {
      '15': '3.8rem'
    },
    animation: {
      'slide': 'slide 1s linear infinite'
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '16': 'repeat(2, minmax(45%, 45%))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }
  },
  },
  plugins: [],
}