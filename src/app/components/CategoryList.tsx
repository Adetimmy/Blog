import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CategoryList = () => {

const categoiesData = [
  {
    title: "Style",
    image:"/style.png",
    color:"#57c4ff31",
    link:"/blog?cat=style" 
  },
  {
    title: "Fashion",
    image:"/fashion.png",
    color:"#da85c731",
    link:"/blog" 
  },
  {
    title: "Food",
    image:"/food.png",
    color:"#7fb88133",
    link:"/blog" 
  },
  {
    title: "Travel",
    image:"/travel.png",
    color:"#ff795736",
    link:"/blog" 
  },
  {
    title: "Culture",
    image:"/culture.png",
    color:"#ffb04f45",
    link:"/blog" 
  },
  {
    title: "Coding",
    image:"/coding.png",
    color:"#5e4fff31",
    link:"/blog" 
  },
]


  return (
    <div>
      <h1 className='my-12 font-bold text-3xl'>Popular Categories</h1>
      <div className='flex gap-5 flex-wrap justify-between '>
        {
          categoiesData.map(category => (
              <Link
              key={category.title}
              href={category.link}
              className={`flex items-center  bg-[${category.color}] gap-3 w-full md:w-[45%] lg:w-[25%] xl-w-[20%] 2xl:w-[15%]  h-20 justify-center rounded-xl`
                        }  
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
