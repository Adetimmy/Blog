import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }:{children:React.ReactNode}) {
  const css2xl = '2xl:max-w-[1536px] 2xl:px-20' 
  const cssxl = 'xl:max-w-[1366px]'
  const csslg = 'lg:max-w-[768px] lg:px-10'
  const cssmd = 'md:max-w-[640px]' 
  const csssm = 'sm:max-w-[475px]'
  
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[100vw] overflow-hidden`}>
       <div className='min-h-screen text-textColor bg-mainBg'>
        <div className={`bg-[purple] mx-[10%] ${css2xl} ${cssxl} ${csslg} ${cssmd} ${csssm}`}>{children}</div>
        </div> 
      </body>
    </html>
  )
}
