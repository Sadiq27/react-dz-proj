import React from 'react'
import { MenuItem } from './MenuItem/MenuItem'

import './MenuList.scss'


export const MenuList = () => {
  return (
    <div className='project-menu-list-wrapper'>
      <ul className='project-menu-list'>
        <MenuItem menuItemText={'All'} />
        <MenuItem menuItemText={'Commercial'} />
        <MenuItem menuItemText={'Residential'} />
        <MenuItem menuItemText={'Other'} />
      </ul>
    </div>
  )
}
