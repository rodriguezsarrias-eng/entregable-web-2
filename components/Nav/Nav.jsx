import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
      <ul className='ul'>
        <li>
          <Link className='Nav-link' to="/">
            Principal
          </Link>
        </li>
        <li>
          <Link className='Nav-link' to="/filtrar">
            Filtrar
          </Link>
        </li>
        <li>
          <Link className='Nav-link' to="/personajes">
            Personajes
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav