import React from 'react'
import { MenuItem } from './MenuItem/MenuItem'

import './MenuList.scss'


export const MenuList = () => {
  return (
    <div className='menu-list-wrapper'>
      <ul className='menu-list'>
        <MenuItem menuItemText={'Home'} />
        <MenuItem menuItemText={'About Us'} />
        <MenuItem menuItemText={'Projects'} />
        <MenuItem menuItemText={'Services'} />
        <MenuItem menuItemText={'Contact Us'} />
      </ul>
    </div>
  )
}
