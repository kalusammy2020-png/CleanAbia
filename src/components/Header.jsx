import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/pickup">PickUp-Service</NavLink>
        <NavLink to="/recycling">Recycling</NavLink>
        <NavLink to="/wastetoenergy">Waste-Energy</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>

    
      
    
  )
}

export default Header