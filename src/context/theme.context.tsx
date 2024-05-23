import { createContext, useState } from "react";

interface IThemeContextInterface {
    darkMode: boolean;
    toggleDarkMode: () => void
}
interface IThemeContextProviderInterface {
    children : React.ReactNode
}


export const ThemeContext = createContext<IThemeContextInterface>({
    darkMode: false,
    toggleDarkMode: () => {}
});

export const ThemeContextProvider = ({children}:IThemeContextProviderInterface) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev)
    }

    return <ThemeContext.Provider value={{darkMode,toggleDarkMode}}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider