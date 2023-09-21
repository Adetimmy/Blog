import Image from 'next/image'
import React from 'react'
import { Menu } from '../../components/Menu'
import { Comments } from '../../components/Comments'




const SinglePage = async ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {  
    
      const { slug } = params
      const {page} = searchParams
    
const res = await ((await fetch(`http://localhost:3000/api/posts/${slug}`)).json()) 
 
   const { post } = res


  return (
    <div className=''>
        <div className='flex gap-[30px] my-[50px]'>
            <div className='lg:w-4/6  flex flex-col justify-between'>
                <h1 className='lg:text-[44px] leading-normal md:text[36px] mb-2 text-[24px]'>
                    {post?.title}
                </h1>
                <div className='flex gap-4 items-center'>
                  {post?.user?.image &&   <div className=''>
                    <Image src={post?.user?.image} alt={post?.user?.name} width={50} height={50} className='rounded-full aspect-square'/>
                    </div> }
                    <div className='flex text-[12px] font-semibold flex-col text-softTextColor'>
                        <span className='text-[20px]'>{post?.user?.name}</span>
                        <span className=' '>01-01-2024</span>
                    </div>

                </div>
            </div>
            {post?.img &&  <div className=' hidden lg:inline rounded-xl w-4/6 h-[350px] overflow-hidden relative'>
                <Image src={post?.img} alt="" fill className='object-cover aspect-square'/>
            </div>}
        </div>
        <div className='flex gap-[50px]'>
            <div className='mt-[60px]' style={{flex:'5'}}>
                <div className='text-softTextColor dark:text-darkSoft flex flex-col gap-8' dangerouslySetInnerHTML={{__html: post?.desc}}/>

             <Comments />
           </div>
          
            <Menu />

        </div>
    </div>
  )
}

export default SinglePage 