'use client'
import Link from 'next/link'
import React from 'react'

export const AuthLinks = () => {
    //temporary solution 
    const status = "notauthenticated"
    const [open, setOpen] = React.useState<boolean>(false)
  return (
    <>
    {
        status === "notauthenticated" ?
        (<Link href='/login' className='hidden md:flex'>Login</Link>)
        :
        (
            <>
                <Link href='/write' className='hidden md:flex'>Write</Link>
                <span className='cursor-pointer hidden md:flex'>Logout</span>
            </>
        )
    }

        <div className='flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)}> 
            <div className={`transition-all ${open? 'rotate-[50deg] translate-y-2 translate-x-1' : 'rotate-0'} w-full h-1 bg-darkBg dark:bg-mainBg`}></div>
        <div className={`transition-all ${open? 'w-0' : 'w-4/6'} h-1 bg-darkBg dark:bg-mainBg`}></div>
            <div className={`transition-all ${open? 'rotate-[130deg] -translate-y-3 translate-x-1' : 'rotate-0'} w-full h-1 bg-darkBg dark:bg-mainBg`}></div>
            
        </div>

        {open && <div className='md:hidden absolute top-[48px] left-0 bg-mainBg dark:bg-darkBg min-h-[100vh] overflow-hidden text-[36px] w-full flex-col flex justify-center items-center gap-12 '>
            <Link href='/' className='xl:text-[18px] '>Homepage</Link>
            <Link href='/' className='xl:text-[18px] '>Contact</Link>
            <Link href='/' className='xl:text-[18px] '>About</Link>

            {
            status === "notauthenticated" ?
            (<Link href='/login'>Login</Link>)
            :
            (
                <>
                    <Link href='/write'>Write</Link>
                    <span className='cursor-pointer'>Logout</span>
                </>
            )
    }
        </div>
        }
    </>
  )
}
