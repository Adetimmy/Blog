import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Provider } from './components/Provider'
import { ThemeContextProvider } from './components/context/useStateContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }:{children:React.ReactNode}) {
  // const css3xl = '2xl:w-[65%] 3xl:px-10 3xl:mx-[10%]' 
  // const css2xl = 'xl:min-w-[70%] 2xl:px-9'
  // const cssxl = 'lg:w-[75%] md:px:8'
  // const csslg = 'md:min-w-[85%] md:px-8' 
  // const cssmd = 'sm:min-w-[100%] mx-[2%] sm:px-4'
  
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[100vw] overflow-hidden`}>
      <ThemeContextProvider>
        <Provider>
          <div className='min-h-screen text-textColor dark:bg-darkBg dark:text-darkColor bg-mainBg flex justify-center py-4 min-w-full'>
            <div className={`w-full px-[20px] lg:mx-[7%] lg:px-[40px]  xl:mx-[12%] xl:px-[50px] 2xl:mx-[15%] 2xl:px[80px]`}>
              <Navbar />
              {children}
              <Footer />
            </div>
          </div> 
        </Provider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}
