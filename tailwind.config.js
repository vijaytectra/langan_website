/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        'Plus_Jakarta_Sans': ['"Plus Jakarta Sans"', 'sans-serif'],
        alegreya: ['"Alegreya Sans SC"', 'sans-serif'],
        'Alegreya_Sans_SC': ['"Alegreya Sans SC"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-hero': 'radial-gradient(circle at center, #ffffff 33%, #ebf3f5 100%)',
      },
      colors: {
        teal: {
          600: '#0d9488',
        }
      }
    },
  },
  plugins: [],
};
