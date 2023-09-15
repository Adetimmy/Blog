import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }:{children:React.ReactNode}) {
  const css3xl = '2xl:min-w-[65%] 2xl:px-20' 
  const css2xl = 'xl:min-w-[70%]'
  const cssxl = 'lg:min-w-[75%] lg:px-10'
  const csslg = 'md:min-w-[85%]' 
  const cssmd = 'sm:min-w-[100%]'
  
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[100vw] overflow-hidden`}>
       <div className='min-h-screen text-textColor bg-mainBg'>
        <div className={`lg:mx-[5%] xl:mx-[10%] ${css2xl} ${cssxl} ${csslg} ${cssmd} ${css3xl}`}>
          <Navbar />
          {children}
          <Footer />
          </div>
        </div> 
      </body>
    </html>
  )
}
