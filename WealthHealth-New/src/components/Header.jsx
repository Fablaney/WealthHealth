// import react
import React from "react"
import { NavLink } from "react-router-dom"

// import perso

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
      
                <NavLink 
                    className="nav-link"
                    activeClassName="active"
                    
                    to="/">
                    <img
                        className='accueillogo'
                        // src={Logo} 
                        alt=""
                    />
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