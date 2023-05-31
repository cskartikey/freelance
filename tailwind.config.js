
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "Mansalva": ['Mansalva', 'cursive'],
        "Space-Grotesk": ['Space Grotesk', 'sans-serif'],
        "Space-Mono": ['Space Mono', 'monospace'],
        "Hurricane": ['Hurricane', 'cursive'],
        "Poppins": ['Poppins', 'sans-serif'],
      },
      colors: {
        'nav-blue': "#3EA9F2"
      },
      opacity: {
        "33": ".33",
        "66": ".66",
      },
    },
  },
  plugins: [],
}
