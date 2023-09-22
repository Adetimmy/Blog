'use client'
import  { signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {

  const router = useRouter()  
  const { status } = useSession()

  if (status === "loading"){
    return <div className=''>Loading...</div>
  }

  else if (status === 'authenticated'){
    router.back()
  }

  return (
    <div className='flex items-center justify-center mt-[60px]'>
        <div className='bg-darkSoft px-[30px] sm:px-[50px] py-[60px] text-[12px] md:text-base font-light md:font-bold md:px-12 lg:px-[200px] lg:py-[150px] text-[white] flex flex-col gap-[50px] rounded-md text-center'>
            <div className='sm:p-5 p-3 rounded-sm cursor-pointer  bg-[#ff5555]'
            onClick={() => signIn('google')}
            >
              Sign in with Google
            </div>
            <div className='sm:p-5 p-3 rounded-sm cursor-pointer bg-[#111]'   onClick={() => signIn('github')}>Sign in with Github</div>
            <div className='sm:p-5 p-3 rounded-sm cursor-pointer  bg-[#087BEA]'>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default Login