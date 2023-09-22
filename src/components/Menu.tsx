import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categoiesData } from './data'
import { Category } from './Category'

export const Menu = () => {
  return (
    <div className='mt-[60px] hidden lg:inline' style={{flex:"2" }}>
      <h2 className='text-[gray] text-[13px] font-normal'>{"What's Hot"}</h2>
      <h1 className='text-[24px]'>Most Popular</h1>
      <div className='flex flex-col-reverse gap-4 my-1  '>
        {categoiesData.map(category => (

          <Link href={`/blog?cat=${category.title}`} key={category.title} className='flex items-center gap-5'>
            <div className='flex-1 relative h-[50px] aspect-square'>
              <Image src={category.image} alt='' fill className='rounded-full object-cover border-[3px] border-[lightgray] ' />
            </div>
            <div className='flex flex-col gap-1' style={{flex:"4"}}>
              <span className={`text-[8px] px-2 py-1 rounded-xl w-max capitalize`} style={{backgroundColor:`${category.color}`}}>{category.title}</span>
              <h3 className='font-normal text-softTextColor text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <div className='text-[10px]'>
                <span className=''> John Doe</span>
                <span className=' text-[gray]'> - 10.02.2023</span>
              </div>
            </div>
          </Link>

        ))}
     </div>
     <div className='my-5'><Category /></div>     
     <div>
        <h2 className='text-[gray] text-[13px] font-normal'>Chosen by the editor</h2>
        <h1 className='text-[24px]'>{"Editor's Pick"}</h1>
        <div className='flex flex-col-reverse gap-4 my-4 '>
            {categoiesData.map(category => (

              <Link href={`/blog?cat=${category.title}`} key={category.title} className='flex items-center gap-5'>
              <div className='flex flex-col gap-1' style={{flex:"4"}}>
                  <span className={`text-[8px] px-2 py-1 rounded-xl w-max`} style={{backgroundColor:`${category.color}`}}>{category.title}</span>
                  <h3 className='font-normal text-softTextColor text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                  <div className='text-[10px]'>
                    <span className=''> John Doe</span>
                    <span className=' text-[gray]'> - 10.02.2023</span>
                  </div>
                </div>
              </Link>

            ))}
        
          </div>
      </div>
    </div>
  )
}
