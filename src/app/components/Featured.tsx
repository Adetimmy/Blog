import Image from 'next/image'
import React from 'react'

export const Featured = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-8xl'>
        <b>Hey, Adetimmy here!</b> Discover my stories and creative ideas. 
      </h1>
      <div className='mt-16 flex items-center gap-12'>
        <div className='flex-1 h-[500px] relative'>
          <Image src='/p1.jpeg' alt='img' fill />
        </div>
        <div className='flex-1'>
          <h1 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.</h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, qui minima. Amet numquam labore fuga culpa excepturi impedit sunt adipisci nihil praesentium, consequatur tempora est. Corporis rem quisquam nam, itaque odit quo.
          </p>
          <button className=''>Read More</button>
        </div>
      </div>
    </div>
  )
}
