import React from 'react'
import { Link } from 'react-router'
import "../App.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" className='a'>Home</Link>
        <Link to="/login" className='a'>Login</Link>
        <Link to="/movie/:id" className='a'>MovieDetails</Link>
    </nav>
   
  )
}

export default Navbar;