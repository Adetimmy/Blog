'use client'
import Image from 'next/image';
import React from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  return (
    <div className='writ'>
      <input type="text" placeholder='Title' className='p-12 text-[64px]  outline-none placeholder:text-[#b3b3b1] ' />
      <div className='flex write gap-5 h-[700px] relative'>
        <button type="button" onClick={() => setOpen(!open)}>
          <Image src='' alt='' width={16} height={16} className=''/>
        </button>
        {
          open && <div className='media_btn flex absolute bg-mainBg dark:bg-darkBg gap-5 z-50 w-full left-12'>
            <button type="button">
              <Image src='' alt='' width={16} height={16} />
            </button>
            <button type="button">
              <Image src='' alt='' width={16} height={16} />
            </button>
            <button type="button">
              <Image src='' alt='' width={16} height={16} />
            </button>
          </div>
        }
        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story....' className='w-full'/>
      </div>
      <button className='absolute right-5 top-7 text-sm px-5 py-2 bg-[#1a8917] text-[white] rounded-2xl '>Publish</button>
   </div>
  )
}

export default WritePage