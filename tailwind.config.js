// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#FF5722',
        background: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 2px 10px rgba(0, 0, 0, 0.2)',
        'custom-highlight': '0 4px 15px rgba(255, 215, 0, 0.5)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color',
      },
    },
  },
  plugins: [],
}
