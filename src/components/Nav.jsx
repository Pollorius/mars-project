import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <div>
      <nav className='navbar navbar-dark bg-secondary'>     
        <Link to='/'>
          <span className="navbar-brand m-0 h1" > 
           The Mars Project 
          </span>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
