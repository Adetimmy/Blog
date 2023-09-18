import { Footer } from '@/src/components/Footer'
import { Navbar } from '@/src/components/Navbar'
import { Provider } from '@/src/components/Provider'
import { ThemeContextProvider } from '@/src/context/useStateContext'
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
      <body className={`${inter.className} w-[100vw] h-screen overflow-x-hidden`}>
      <ThemeContextProvider>
        <Provider>
          <div className='min-h-screen  text-textColor dark:bg-darkBg dark:text-darkColor bg-mainBg flex justify-center py-4 min-w-full'>
            <div className={`w-full mx-[30px] sm:mx-[50px] px-[10px] lg:mx-[5%] lg:px-[15px]  xl:mx-[8%] xl:px-[30px] 2xl:mx-[10%] 2xl:px[50px]`}>
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
