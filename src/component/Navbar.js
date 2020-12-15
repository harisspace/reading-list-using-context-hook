import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
    const { theme, dispatchTheme } = useContext(ThemeContext);
    const newTheme = theme.isLight? theme.light : theme.dark;
    return (
        <div className="navbar" style={{ color: newTheme.syntax, background: newTheme.bg }}>
            <h1>Reading List</h1>
            <div className="mode">
                <button onClick = { () => dispatchTheme({ type: "TOGGLE_THEME"})}>{ theme.isLight? "Light" : "dark" }</button>
            </div>
        </div>
    )
}

export default Navbar
