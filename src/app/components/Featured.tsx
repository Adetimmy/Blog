import Image from 'next/image'
import React from 'react'

export const Featured = () => {
  return (
    <div className='mt-8'>
      <h1 className='sm:text-[28px] text-[18px] xl:text-[54px] lg:text-[48px] md:text-[36px] 2xl:text-[64px] font-light'>
        <b className='font-bold'>Hey, Adetimmy here!</b> Discover my stories and creative ideas. 
      </h1>
      <div className='mt-16 flex items-center gap-12'>
        <div className='lg:flex flex-1 h-[500px] relative hidden'>
          <Image src='/p1.jpeg' alt='img' fill className='object-cover'/>
        </div>
        <div className='flex-1 flex-col gap-5 flex'>
          <h1 className='2xl:text-[36px] xl:text-[28px] md:text-[20px] text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.</h1>
          <p className=' font-light text-base text-softTextColor'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, qui minima. Amet numquam labore fuga culpa excepturi impedit sunt adipisci nihil praesentium, consequatur tempora est. Corporis rem quisquam nam, itaque odit quo.
          </p>
          <button className='py-4 px-5 rounded-md w-max bg-softBg text-textColor'>Read More</button>
        </div>
      </div>
    </div>
  )
}
