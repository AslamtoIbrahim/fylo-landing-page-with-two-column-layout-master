import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <div className='flex items-center justify-between   py-6 md:py-8 lg:py-10 padx '>
      <Logo />
      <NavLinks />
    </div>
  )
}

export default Header
