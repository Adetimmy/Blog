"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

export const Comments = (slug: any) => {
  const { postSlug } = slug as any
  const { status } = useSession()
//   const [loading, setLoading] = React.useState(false)
  const [desc, setDesc] = useState<string>('')




// the difference between using swr and useEffect in this scenarios is that; useEffect refetches the data like afresh while swr like caches the data if there is new data in block it just adds it(mutating) without fetching afresh 


//   const [res, setRes] = useState<any>()

//   useEffect(() => {
//     fetchComments()
//   }, [])

//   const fetchComments = () => {
//     setLoading(true)

//     fetch(`http://localhost:3000/api/comment?postSlug=${postSlug}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error fetching data: ${response.status}`)
//         }
//         return response.json() // Parse the response as JSON
//       })
//       .then((data) => {
//         // Handle the parsed data here
//         setRes(data)
//         setLoading(false)
//       })
//       .catch((error) => {
//         // Handle any errors that occurred during the fetch
//         console.error(error)
//         setLoading(false)
//       })
//   }

// using lightweight Vercel swr to simplify the above 
const fetchComments = async (url:string) => {
    return await ((await fetch(url)).json())
}

  const {isLoading, mutate, data} = useSWR(`http://localhost:3000/api/comment?postSlug=${postSlug}`, fetchComments )



  const handleSubmit = async () => {
    await fetch('http://localhost:3000/api/comment', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    })
    setDesc('')
    // After adding a new comment, refetch comments
        // fetchComments()

   // adds new comments 
    mutate()
  }

  return (
    <div className='mt-[50px]'>
        <h1 className='text-[20px] text-softTextColor my-5'>Comments</h1>
        {status === "authenticated"?
        <div className='flex items-center flex-col lg:flex-row justify-between gap-7'>
            <textarea placeholder='write a commment ...' className='p-5 w-full' onChange={e => setDesc(e.target.value)} value={desc}></textarea>
            <button className='self-end lg:self-auto rounded-md text-[lightgray] bg-[teal] font-bold px-5 py-2'onClick={handleSubmit} >Send</button>
        </div>
        :
        <Link href='/login' className='text-sm'>Login to write a comment</Link>

        }

        <div className='mt-[50px]'>
            <div className='flex flex-col gap-1 mb-[50px]'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <Image src='/coding.png' alt='john doe' width={50} height={50} className='rounded-full aspect-square'/>
                    </div>
                    <div className='flex text-[12px] font-semibold flex-col text-softTextColor'>
                        <span className='text-[15px]'>John Doe</span>
                        <span className=' '>01-01-2024</span>
                    </div>
                </div>
                <p className='text-[15px] text-softTextColor mt-3 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem voluptas iure reiciendis! Soluta, eos!</p>
            </div>

        {isLoading? "loading comments..." : data?.comments?.map((item:any ) => {
                return (

            <div className='flex flex-col gap-1 mb-[50px]' key={item?._id}>
                <div className='flex gap-4 items-center'>
                    {item?.user?.image &&
                    <div>
                        <Image src={item?.user?.image } alt={item?.user?.name} width={50} height={50} className='rounded-full aspect-square'/>
                    </div> }
                    <div className='flex text-[12 px] font-semibold flex-col text-softTextColor'>
                        <span className='text-[20px]'>{item?.user?.name}</span>
                        <span className=' '>{item?.createdAt?.substring(0, 10)}</span>
                    </div>
                </div>
                <p className='text-[18px] text-darkSoft mt-3 font-light'>{item?.desc}</p>
            </div>
                )
            })
            }
        </div>
    </div>
)
}