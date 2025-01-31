// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}', // adjust based on your project's file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ['Tangerine', 'serif'], // Add your custom font here
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}

