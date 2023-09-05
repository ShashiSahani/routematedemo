import React from 'react'
import Logo from '../assets/logo192.png'
function Header() {
  return (
   <header>
    <a href='/' className='logo'>
      <img src={Logo} alt="Routemate Logo"/>
      <span>Routemate</span>
    </a>
    <nav>
      <a href="/" className='link'>Home</a>
      <a href="/ProductList"  className='link'>Products</a>
      <a href="/contact"  className='link'>Contacts</a>
    </nav>
   </header>
  )
}

export default Header