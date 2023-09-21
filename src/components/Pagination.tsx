'use client'
import React from 'react'
import {useRouter} from 'next/navigation'


type Page = {
  count:number,
  page:number
}

export const Pagination = ({page, count}:Page) => {
  const post_per_page = 2
 const hasPrev = post_per_page * (page - 1) > 0
 const hasNext = post_per_page * (page - 1) + post_per_page < count  


  const router = useRouter() 
  return (
    <div className=' flex justify-between text-[white]'>

      <button className='w-24 p-2 bg-[crimson] disabled:bg-[#dc143c35] disabled:cursor-not-allowed' onClick={ () => router.push(`?page=${page - 1 }`)} disabled={!hasPrev}>Previous</button>
      <button className='w-24 p-2 bg-[crimson] disabled:bg-[#dc143c35] disabled:cursor-not-allowed'
      onClick={ () => router.push(`?page=${page + 1 }`)} disabled={!hasNext}>Next</button>
    </div>
  )
}
