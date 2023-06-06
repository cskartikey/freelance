/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-triange-pattern': "url('/png/blue-triangle.png')",
        'purp-rectangle-pattern': "url('/png/purple-rectangle.png')",
        'green-triange-pattern': "url('/png/green-triangle.png')",
        'red-rectangle-pattern': "url('/png/red-rectangle.png')",
      },
      fontFamily: {
        Mansalva: ['Mansalva', 'cursive'],
        'Space-Grotesk': ['Space Grotesk', 'sans-serif'],
        'Space-Mono': ['Space Mono', 'monospace'],
        Hurricane: ['Hurricane', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'nav-blue': '#3EA9F2',
        'scroll-blue': '#BBE1FA',
        'rectangle-purp': '#9376E0',
        'team-green': '#A0D8B3',
        'contact-red': '#F99B7D',
        'footer-number-red': '#F3BCC8',
        'footer-number-green': '#A0D8B3',
        'footer-number-ured': '#F99B7D',
      },
      opacity: {
        33: '.33',
        66: '.66',
      },
    },
  },
  plugins: [],
}
