import Link from 'next/link'
import React from 'react'

export const AuthLinks = () => {
    //temporary solution 
    const status = "notauthenticated"
  return (
    <>
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
    </>
  )
}
