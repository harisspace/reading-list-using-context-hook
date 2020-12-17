import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const [isLight, setLight] = useState(false)

    return (
        <ThemeContext.Provider>
            { props.children }
        </ThemeContext.Provider>
    )
}
