import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categoiesData } from './data'

export const Category = () => {

  return (
    <div>
        <h2 className='text-[gray] text-[13px] font-normal'>Discover by topic</h2>
        <h1 className='text-[24px]'>Categories</h1>
      <div className='flex gap-5  text-[10px] flex-wrap my-2  '>
        {
          categoiesData.map(category => (
              <Link
              key={category.title}
              href={category.link}
              className={`flex items-center gap-3 w-[70px] py-2 px-5 h-[35px] justify-center rounded-xl`
                        }  style={{backgroundColor:`${category.color}`}}
              >
          
                {category.title}
              </Link>
           
          ))
        }
        </div>
    </div>
  )
}
