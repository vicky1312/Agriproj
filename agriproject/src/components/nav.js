import React from 'react'
import './static/nav.css'
import { Link } from 'react-router-dom'
import './animal.js'
function Nav() {
  return (
    <>
      <div className='headimg'>
          <img alt='navimg' id='navimg' src={require('./assets/head.jpg')}></img>
        </div> 
      <nav className='navlink' id='navlink'>
        <Link to='/'>Home</Link>
        <Link to='/'>Animals</Link>
        <Link to='/'>Pasture</Link>
        <Link to='/'>Contact</Link>
      </nav>
      
    </>
  )
}

export default Nav
