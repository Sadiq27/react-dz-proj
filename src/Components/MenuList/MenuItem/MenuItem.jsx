import React from 'react'

import './MenuItem.scss'

export const MenuItem = ({ menuItemText }) => {
  return (
    <li>
      <a href='#'>{menuItemText}</a>
    </li>
  )
}
