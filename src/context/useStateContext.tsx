'use client'
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<null | any>(null)


const getThemeFromLocalStorage = () => {
    if(typeof window !== "undefined"){
        const value = localStorage.getItem('theme') 
        return value || "light"
    }
} 

export const ThemeContextProvider = ({ children }:{children:React.ReactNode}) => {

const [theme, setTheme] = useState<any>(() => {return getThemeFromLocalStorage()})

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