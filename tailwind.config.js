/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',,
    './node_modules/github-card-react/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens:{
        "Mini-Pc":"1200px",
        "Pc":"1700px",
        "mobile":"390px",
        "ipad":"766px",
        "low-mob":"350px"
      },
     colors:{
      primary:" #41436A",
      secondary:"#F54768"
     },
      fontFamily:{
        logo:"Cecilia",
        nohemi:"Nohemi"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        "button-glow":"0 0 30px 0 primary"
      }
    },
  },
  plugins: [],
}

