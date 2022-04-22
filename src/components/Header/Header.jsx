import React from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const setActive = ({ isActive }) => {
    return cn(styles.link, {
      [styles.active]: isActive,
    })
  }
  return (
    <header className={styles.header}>
      <NavLink className={setActive} to="/">
        новости
      </NavLink>
      <NavLink className={setActive} to="about">
        о нас
      </NavLink>
    </header>
  )
}

export default Header
