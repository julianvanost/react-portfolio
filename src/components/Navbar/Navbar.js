import React from 'react'
import {
  Link
} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-1 h1">Julian Van Ost</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to='/'>Home</Link>
          <Link className="nav-item nav-link" to='/about'>About</Link>
          <Link className="nav-item nav-link" to='/portfolio'>Portfolio</Link>
          <Link className="nav-item nav-link" to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar