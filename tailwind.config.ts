import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
       fontFamily: {
        work: ['Work Sans', 'sans-serif']
    },
    backgroundColor:{
      mainBg:'white',
      darkBg:"#0f172a",
      darkSoft:"#1f273a",
      softBg:"#f0f0f0",
    },
   colors:{
      textColor:"black",
      darkColor:"#ddd",
      darkSoft:"#a6a6a6",
      softTextColor:"#626262",
    },

       
  },
  plugins: [],
}
export default config
