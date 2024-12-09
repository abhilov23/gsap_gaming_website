/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontfamily:{
         zentry: ['zentry', 'sanf-serif'],
         general: ['general', 'sanf-serif'],
         'circular-web': ['circular-web', 'sanf-serif'],
         'robert-medium': ['robert-medium', 'sanf-serif'],
         'robert-regular': ['robert-regular', 'sanf-serif'],
      },
      colors: {
        blue:{
          50: '#DFDFF0',
          75:'#DFDFF2',
          100:'#f0f2fa',
          200:'#101010',
          300:'#4FB7DD',
        },
        violet:{
          300: '#5724ff',
        },
        yellow:{
          100:'#8e983f',
          300:'#EDFF66'
        }
      }
    },
  },
  plugins: [],
}



