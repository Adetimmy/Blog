'use client'
import { useStateContext } from '../context/useStateContext'

export const Provider = ({children}:{children:React.ReactNode}) => {
    const {theme} = useStateContext()
  return (
    <div className={theme}>{children}</div>
  )
}
