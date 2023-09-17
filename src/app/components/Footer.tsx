import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-[100px] items-center gap-[30px] my-[50px]'>
       <div className=''>
        <div className='flex gap-2 items-center '>
          <Image src='/logo.png' alt='lama blog' width={35} height={35} />
          <h1 className='text-[24px] text-softTextColor'>Lamablog</h1>
        </div>
        <p className='text-[13px] my-3 text-softTextColor md:w-5/6 w-full'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et in sed totam vero tenetur quod magni nobis doloribus blanditiis. Eius neque animi nesciunt voluptas.
        </p>
        <div className='flex items-center gap-2'>
          <Image src="/facebook.png" alt='facebook' width={18} height={18}/>
          <Image src="/instagram.png" alt='instagram' width={18} height={18}/>
          <Image src="/tiktok.png" alt='tiktok' width={18} height={18}/>
          <Image src="/youtube.png" alt='youtube' width={18} height={18}/>
        </div>
       </div>
       <div className='flex w-full items-center justify-between lg:gap-[100px] gap[50px] text-softTextColor'>
          <div className='flex flex-col gap-3 text-[13px]'>
            <span className='font-semibold text-[15px]'>Links</span>
            <Link href='/'>Hompage</Link>
            <Link href='/'>Blog</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
          <div className='flex flex-col gap-3 text-[13px]'>
            <span className='font-semibold text-[15px]'>Tags</span>
            <Link href='/'>Travel</Link>
            <Link href='/'>Coding</Link>
            <Link href='/'>Style</Link>
            <Link href='/'>Fashion</Link>
          </div>
          <div className='flex flex-col gap-3 text-[13px]'>
            <span className='font-semibold text-[15px]'>Social</span>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Tiktok</Link>
            <Link href='/'>Youtube</Link>
          </div>
       </div>
    </div>
  )
}
