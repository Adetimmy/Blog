import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Comments = () => {
    const status = 'authenticated'
  return (
    <div className='mt-[50px]'>
        <h1 className='text-[28px] text-darkSoft my-5'>Comments</h1>
        {status === "authenticated"?
        <div className='flex items-center flex-col lg:flex-row justify-between gap-7'>
            <textarea placeholder='write a commment ...' className='p-5 w-full'></textarea>
            <button className='self-end lg:self-auto rounded-md text-[lightgray] bg-[teal] font-bold px-5 py-2'>Send</button>
        </div>
        :
        <Link href='/login' className=''>Login to write a comment</Link>
    
    }
    <div className='mt-[50px]'>
        <div className='flex flex-col gap-1 mb-[50px]'>
            <div className='flex gap-4 items-center'>
                <div>
                <Image src='/coding.png' alt='john doe' width={50} height={50} className='rounded-full aspect-square'/>
                </div>
                <div className='flex text-[12 px] font-semibold flex-col text-softTextColor'>
                    <span className='text-[20px]'>John Doe</span>
                    <span className=' '>01-01-2024</span>
                </div>
            </div>
            <p className='text-[18px] text-darkSoft mt-3 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem voluptas iure reiciendis! Soluta, eos!</p>
        </div>

        <div className='flex flex-col gap-1 mb-[50px]'>
            <div className='flex gap-4 items-center'>
                <div>
                <Image src='/coding.png' alt='john doe' width={50} height={50} className='rounded-full aspect-square'/>
                </div>
                <div className='flex text-[12 px] font-semibold flex-col text-softTextColor'>
                    <span className='text-[20px]'>John Doe</span>
                    <span className=' '>01-01-2024</span>
                </div>
            </div>
            <p className='text-[18px] text-darkSoft mt-3 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem voluptas iure reiciendis! Soluta, eos!</p>
        </div>

        <div className='flex flex-col gap-1 mb-[50px]'>
            <div className='flex gap-4 items-center'>
                <div>
                <Image src='/coding.png' alt='john doe' width={50} height={50} className='rounded-full aspect-square'/>
                </div>
                <div className='flex text-[12 px] font-semibold flex-col text-softTextColor'>
                    <span className='text-[20px]'>John Doe</span>
                    <span className=' '>01-01-2024</span>
                </div>
            </div>
            <p className='text-[18px] text-darkSoft mt-3 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem voluptas iure reiciendis! Soluta, eos!</p>
        </div>

        <div className='flex flex-col gap-1 mb-[50px]'>
            <div className='flex gap-4 items-center'>
                <div>
                <Image src='/coding.png' alt='john doe' width={50} height={50} className='rounded-full aspect-square'/>
                </div>
                <div className='flex text-[12 px] font-semibold flex-col text-softTextColor'>
                    <span className='text-[20px]'>John Doe</span>
                    <span className=' '>01-01-2024</span>
                </div>
            </div>
            <p className='text-[18px] text-darkSoft mt-3 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem voluptas iure reiciendis! Soluta, eos!</p>
        </div>
    </div>
    </div>
  )
}
 