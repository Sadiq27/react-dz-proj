import React from 'react'

import logo from '../../assets/icons/logo.png'

export const Logo = () => {
  return (
    <div className='navbar-logo'>
      <a href='#'>
        <img src={logo} alt='' />
      </a>
    </div>
  )
}
