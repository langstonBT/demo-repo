import React from "react"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return(
    <nav>
      <NavLink to="/"className="home-logo-link">#VANLIFE</NavLink>
      <NavLink to="/about"className="about-link">About</NavLink>
      <NavLink to="/vans"className="vans-link">Vans</NavLink>
      <h1>hello</h1>
    </nav>
  )
}

export default Navbar