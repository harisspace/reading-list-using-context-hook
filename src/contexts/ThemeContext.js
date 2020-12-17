import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const [isLight, setLight] = useState(false)

    return (
        <ThemeContext.Provider value={{ isLight, setLight }}>
            { props.children }
        </ThemeContext.Provider>
    )
}
