// import react
import React from "react"
import { NavLink } from "react-router-dom"

// import perso
import Logo from "../assets/logo-HRNet-neon.svg"

/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header()
{
    return (
        <header className=''>

            <nav className=''>

                <div className="left">

                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active": "nav-link"}
                        to="/home"
                    >
                        Home
                    </NavLink>

                </div>

                <div className="center">

                    <NavLink
                        className="nav-link logo"
                        to="/">
                        <img className='accueillogo' src={Logo} alt=""/>
                    </NavLink>

                </div>

                <div className="right">
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link active": "nav-link"}
                        to="/employeelist">
                        Employee List
                    </NavLink>
                </div>

            </nav>
         
        </header>
    )
}
    
export default Header