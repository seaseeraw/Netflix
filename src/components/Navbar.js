// import React from 'react'
// import { Link } from 'react-router'
// import "../App.css"

// function Navbar() {
//   return (
//     <nav className='navbar'>
//         <Link to="/" className='a'>Home</Link>
//         <Link to="/login" className='a'>Login</Link>
//         <Link to="/movie/:id" className='a'>MovieDetails</Link>
//     </nav>
   
//   )
// }

// export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {!user ? (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;
