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
    }
  },
  },
  plugins: [],
}