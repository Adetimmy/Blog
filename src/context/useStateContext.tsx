'use client'
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<null | any>(null)


 

export const ThemeContextProvider = ({ children }:{children:React.ReactNode}) => {
const [getTheme, setGetTheme] = useState('')

const [theme, setTheme] = useState<any>('light')


useEffect(() => {
    // Check if a theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // If a theme is found in localStorage, use it
      setTheme(savedTheme);
    } else {
      // Otherwise, set the theme based on the user's preference
      const clientDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setTheme(clientDefaultTheme);
    }
  }, []);




const toggle = () => {
 
    // Toggle between 'light' and 'dark' themes
    setTheme((currentTheme:any) => (currentTheme === 'light' ? 'dark' : 'light'));
     
}

useEffect(() => {
    // Set the theme in localStorage whenever it changes
    localStorage.setItem('theme', theme);

    // Apply the theme to the entire document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


return (
    <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
)

} 

export const useStateContext = () => useContext(ThemeContext)