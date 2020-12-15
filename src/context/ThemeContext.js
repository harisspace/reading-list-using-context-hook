import React, { useReducer, createContext } from 'react'
import { themeReducer } from '../reducers/themeReducer'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, dispatchTheme] = useReducer(themeReducer, {
        isLight: false,
        light: { syntax: 'white', ui: '#ddd', bg: 'rgb(195, 0, 255)'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    });

    return (
        <ThemeContext.Provider value={{ theme, dispatchTheme }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;