import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center mt-[60px]'>
        <div className='bg-darkSoft px-[10px] py-[60px] text-[12px] md:text-base font-light md:font-bold md:px-12 lg:px-[200px] lg:py-[150px] text-[white] flex flex-col gap-[50px] rounded-md'>
            <div className='p-5 rounded-sm cursor-pointer  bg-[#ff5555]'>Sign in with Google</div>
            <div className='p-5 rounded-sm cursor-pointer bg-[#111]'>Sign in with Github</div>
            <div className='p-5 rounded-sm cursor-pointer  bg-[#087BEA]'>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default Login