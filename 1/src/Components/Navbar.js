import React, { useContext } from "react";
import '../SASS/navbar.scss'
import { Outlet } from "react-router-dom";
import Theme from "../Context/Theme";
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'


const Navbar = () => {
    const { theme, toggleTheme } = useContext(Theme)

    return (
        <>
        <nav className={`navbar ${theme}`}>
            <div><h2 className="title">Where in the world?</h2></div>
            <div className="theme">
                {theme === 'dark'? 
                <BsFillMoonFill 
                className="icon"
                onClick={toggleTheme} 
                />: 
                <BsFillSunFill 
                className="icon"
                onClick={toggleTheme}
                /> }
                <label>Dark mode</label>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Navbar;
