import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categoiesData } from './data'

export const CategoryList = () => {

  return (
    <div>
      <h1 className='my-12 font-bold text-3xl'>Popular Categories</h1>
      <div className='flex gap-5 flex-wrap justify-between '>
        {
          categoiesData.map(category => (
              <Link
              key={category.title}
              href={category.link}
              className={`flex items-center gap-3 w-full md:w-[45%] lg:w-[25%] xl-w-[20%] 2xl:w-[15%]  h-20 justify-center rounded-xl`
                        }  style={{backgroundColor:`${category.color}`}}
              >
                <Image
                src={category.image}
                alt=''
                width={32}
                height={32}
                className='rounded-full aspect-square'

                />
                {category.title}
              </Link>
           
          ))
        }
        </div>
    </div>
  )
}
