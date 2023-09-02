import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      {/*
        <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre</Link>
      */}
      {/*LINK ATIVO*/}
      {/*1*/}
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>

      {/*2*/}
      {/*
      <NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}>Inicio</NavLink>
      <NavLink to="/sobre" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}>Sobre</NavLink>
      */}
    </nav>
  )
}

export default Navbar;