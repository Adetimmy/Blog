import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { AuthLinks } from './AuthLinks'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='gap-3 flex-1 lg:flex hidden'>
         <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
         <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
         <Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
         <Image src="/youtube.png" alt='youtube' width={24} height={24}/>
      </div>
      <div className='flex-1 lg:text-center font-bold text-[24px] xl:text-[36px] text-left '>lambablog</div>
      <div className='flex gap-2 xl:gap-5 flex-1 items-center xl:text-[20px] justify-end xl:justify-normal'>
        <ThemeToggle />
        <Link href='/' className='xl:text-[18px] hidden md:flex'>Homepage</Link>
        <Link href='/' className='xl:text-[18px] hidden md:flex'>Contact</Link>
        <Link href='/' className='xl:text-[18px] hidden md:flex'>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
