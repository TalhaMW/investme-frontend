/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs:'320px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    fontFamily: {
      SfPro: ['SF Pro Display', 'sans-serif'],
      Inter:['Inter','sans-serif'],
      IBM:['IBM Plex Sans','sans-serif'],
      Poppins:['Poppins','sans-serif']
    },
    extend: {
      colors: {
        'primaryBlack':'#2C2E3E',

        'primaryBlue': '#3454CF',

        'primaryGray':'#6F6C90',
        'primaryGrayLight':'#F8FAFF',
        'primaryGrayLight2':'#F9F9F9',
        'primaryGrayLight3':'#E7E7E7',
        'primaryGrayLight4':'#A0A3BD',
        'primaryGrayLight5':'#CDD2E1',

        'boxShadow':'0px 0px 10px rgba(52, 84, 207, 0.07)',
        
      },
// borderRadius: {
//   'xl': '6px',
//   '1xl': '10px',
//   '2xl': '20px',
// }
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
    },
  },
  plugins: [],
}
