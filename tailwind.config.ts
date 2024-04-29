import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--inter)']
      },
      colors: {
        'roooby-gray': {
          100: '#f4f4f4',
          200: '#dcdcdc',
          300: '#787878',
          400: '#777777',
          500: '#404040',
          600: '#3b3a40'
        },
        'roooby-green': {
          100: '#ebfbf3',
          400: '#00cc61'
        },
        'roooby-blue': '#150050',
        'roooby-teal': '#004050',
        'roooby-yellow': '#ffe377'
      },
      backgroundImage: {
        'cta-background': "url('/assets/images/cta-bg-image.svg')"
      }
    },
    container: {
      padding: {
        xl: '0rem'
      },
      center: true,
      screens: {
        sm: '1140px'
      }
    }
  },
  plugins: [],
};
export default config;
