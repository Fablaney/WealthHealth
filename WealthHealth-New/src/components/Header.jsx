// import react
import React from "react"
import { NavLink } from "react-router-dom"

// import perso
import Logo from "../assets/logoWH.jpg"

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

            <div className="logo">
                <NavLink
                    className="nav-link"
                    to="/home">
                    <img className='accueillogo' src={Logo} alt=""/>
                </NavLink>
            </div>

            <nav className=''>

                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link active": "nav-link"}
                    to="/home">
                    Home
                </NavLink>

                <NavLink
                    className={({ isActive }) => isActive ? "nav-link active": "nav-link"}
                    to="/employeelist">
                    Employee List
                </NavLink>

            </nav>
         
        </header>
    )
}
    
export default Header