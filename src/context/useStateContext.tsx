'use client'
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<null | any>(null)


 

export const ThemeContextProvider = ({ children }:{children:React.ReactNode}) => {
const [getTheme, setGetTheme] = useState('')

const [theme, setTheme] = useState<any>('')


useEffect(() => {
const then = localStorage.getItem('theme') as string
setTheme(then)
}, [])




const toggle = () => {
    setTheme(theme === 'light' ? "dark" : "light")
}

useEffect(() => {
    localStorage.setItem('theme', theme) 
}, [theme])


return (
    <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
)

} 

export const useStateContext = () => useContext(ThemeContext)