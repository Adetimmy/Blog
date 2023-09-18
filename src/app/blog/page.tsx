import React from 'react'
import { Menu } from '../../components/Menu'
import { CardList } from '../../components/CardList'

export default function Blog() {
  return (
    <>
        <div className='bg-[coral] px-3  p-2'>
            <h1 className='text-center text-[white] text-[24px]'>Style Blog</h1>
        </div>
        <div className='flex gap-[50px]'>
            <CardList/>
            <Menu/>
        </div>
    </>
  )
}
