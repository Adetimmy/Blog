import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
       fontFamily: {
        work: ['Work Sans', 'sans-serif']
    },
    backgroundColor:{
      mainBg:'white',
      softBg:"#f0f0f0",
    },
   colors:{
      textColor:"black",
      softTextColor:"#626262",
    },
       
  },
  plugins: [],
}
export default config
