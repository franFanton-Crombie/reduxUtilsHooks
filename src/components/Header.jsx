import React, { useState } from 'react'

const Header = () => {
    const [darkMode,setDarkMode] = useState(false);
    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    return(
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'DarkMode' : 'LightMode'}</button>
        </div>
    )
}

export default Header;