import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { menuItemsSelector } from './menu-selectors'
import './Menu.scss'

const Menu = () => {
  const menuItems = useSelector(menuItemsSelector)

  return (
    <nav className="Menu">
      {menuItems.map(({ title, slug }) => (
        <Link key={slug} to={slug === '/' ? slug : `/${slug}`}>
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
