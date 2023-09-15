'use client'
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<null | any>(null)

export const ThemeContextProvider = ({ children }:{children:React.ReactNode}) => {

const [theme, setTheme] = useState<string | null>('light')

return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
)

} 

export const useStateContext = useContext(ThemeContext)