import Image from 'next/image'
import React from 'react'

export const ThemeToggle = () => {
  return (
    <div className='flex w-10 h-5 rounded-xl cursor-pointer bg-[black] items-center justify-between relative'>
        <Image src='/moon.png' alt='moon' width={14} height={14}/>
        <div className='w-4 h-4 rounded-full bg-mainBg absolute left-[1px]'/>
        <Image src='/sun.png' alt='sun' width={14} height={14}/>
    </div>
  )
}
