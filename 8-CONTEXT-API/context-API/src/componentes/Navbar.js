import "./Navbar.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  )
}

export default Navbar;