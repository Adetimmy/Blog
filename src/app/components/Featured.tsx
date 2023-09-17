import Image from 'next/image'
import React from 'react'

export const Featured = () => {
  return (
    <div className='mt-8'>
      <h1 className='sm:text-[36px] text-[24px] xl:text-[64px] lg:text-[54px] md:text-[48px] 2xl:text-[72px] font-light'>
        <b className='font-bold'>Hey, Adetimmy here!</b> Discover my stories and creative ideas. 
      </h1>
      <div className='mt-16 flex items-center gap-12'>
        <div className='lg:flex flex-1 h-[500px] relative hidden'>
          <Image src='/p1.jpeg' alt='img' fill className='object-cover'/>
        </div>
        <div className='flex-1 flex-col gap-5 flex'>
          <h1 className='2xl:text-[40px] xl:text-[32px] md:text-[28px] text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.</h1>
          <p className=' font-light text-[20px] text-softTextColor'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, qui minima. Amet numquam labore fuga culpa excepturi impedit sunt adipisci nihil praesentium, consequatur tempora est. Corporis rem quisquam nam, itaque odit quo.
          </p>
          <button className='py-4 px-5 rounded-md w-max bg-softBg text-textColor'>Read More</button>
        </div>
      </div>
    </div>
  )
}
