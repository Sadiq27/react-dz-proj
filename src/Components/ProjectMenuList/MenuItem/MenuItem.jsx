import React from 'react'

import './MenuItem.scss'

export const MenuItem = ({ menuItemText }) => {
  return (
    <li className='project-menu-item'>
      <a href='#'>{menuItemText}</a>
    </li>
  )
}
