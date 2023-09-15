import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { AuthLinks } from './AuthLinks'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-3 flex-1'>
         <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
         <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
         <Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
         <Image src="/youtube.png" alt='youtube' width={24} height={24}/>
      </div>
      <div className='flex-1 text-center font-bold text-xl'>lambablog</div>
      <div className='flex gap-5 flex-1'>
        <ThemeToggle />
        <Link href='/'>Homepage</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
