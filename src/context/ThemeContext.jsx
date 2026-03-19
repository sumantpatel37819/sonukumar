import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const THEME_KEY = 'portfolia-theme'

const ThemeContext = createContext({
    theme: 'dark',
    isLight: false,
    toggleTheme: () => { },
})

const getInitialTheme = () => {
    const savedTheme = window.localStorage.getItem(THEME_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    return prefersLight ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem(THEME_KEY, theme)
    }, [theme])

    const value = useMemo(() => ({
        theme,
        isLight: theme === 'light',
        toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
