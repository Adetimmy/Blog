'use client'
import Image from 'next/image'
import React from 'react'
import { useStateContext } from '../context/useStateContext'

export const ThemeToggle = () => {
    const {theme, toggle} = useStateContext()
    return (
      <div className='flex w-10 h-5 rounded-xl cursor-pointer bg-[black] items-center justify-between dark:bg-mainBg relative' onClick={toggle}>
          <Image src='/moon.png' alt='moon' width={14} height={14}/>
          <div className={`w-4 h-4 bg-mainBg dark:bg-darkBg transition-all rounded-full ${theme==="light" ? 'right-[1px]':' left-[1px]'}  absolute`}/>
          <Image src='/sun.png' alt='sun' width={14} height={14}/>
      </div>
  )
}
