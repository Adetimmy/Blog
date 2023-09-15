import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[100vw] overflow-hidden`}>
       <div className='min-h-screen text-textColor bg-bg'>
        <div className='max-w-[1536px] mx-[15%]'>{children}</div>
        </div> 
      </body>
    </html>
  )
}
