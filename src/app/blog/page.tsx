'use client'
import React from 'react'
import { Menu } from '../../components/Menu'
import { CardList } from '../../components/CardList'
import { useSearchParams } from 'next/navigation' 

export default function Blog() {
  const searchParams = useSearchParams()
  const cat  = searchParams.get('cat')

  return (
    <>
        <div className='bg-[coral] px-3  p-2'>
            <h1 className='text-center text-[white] text-[24px] capitalize'>{cat} Blog</h1>
        </div>
        <div className='flex gap-[50px]'>
            <CardList cat={cat}/>
            <Menu/>
        </div>
    </>
  )
}
