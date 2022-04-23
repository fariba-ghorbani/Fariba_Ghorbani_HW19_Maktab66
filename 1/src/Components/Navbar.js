import React from "react";
import '../SASS/navbar.scss'
import { Outlet } from "react-router-dom";


const Navbar = () => {

    return (
        <>
        <nav className="navbar">
            <div><h2>Where in the world?</h2></div>
            <div>
                <label>Dark mode</label>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Navbar;
