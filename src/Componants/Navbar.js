import React from "react"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return(
    <nav>
      <NavLink to="/"className="home-logo-link">#VANLIFE</NavLink>
      <NavLink to="/about"className="about-link">About</NavLink>
      <NavLink to="/vans"className="vans-link">Vans</NavLink>
      <h1>hello</h1>
      <h1>This is a change i have just made as of 19/01/2024</h1>
    </nav>
  )
}

export default Navbar