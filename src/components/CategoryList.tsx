import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categoiesData } from './data'


type Category = {
  _id :   string,  
  slug : string, 
  title : string,
  img? :  string
  color: string
  link: string
}[]

export const CategoryList = async () => {
  const res =  await fetch('http://localhost:3000/api/categories', {next:{revalidate:10}}) 
  const data = await res.json() as Promise<Category>

  return (
    <div>
      <h1 className='my-12 font-bold text-3xl'>Popular Categories</h1>
      <div className='flex gap-5 flex-wrap justify-between '>
        {
          (await data)?.map((category) => (
              <Link
              key={category._id}
              href={`/blog?cat=${category.slug}`}
              className={`flex items-center gap-3 w-full md:w-[45%] lg:w-[25%] xl-w-[20%] 2xl:w-[15%]  h-20 justify-center rounded-xl`
                        }  style={{backgroundColor:`${category.color}`}}
              >
                {category.img &&
                <Image
                src={category.img}
                alt=''
                width={50}
                height={50}
                className='rounded-full aspect-square'

                />}
                {category.title}
              </Link>
           
          ))
        }
        </div>
    </div>
  )
}
