import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.page}>
      Такой страницы нет <Link className={styles.link} to="/">домой</Link>
    </div>
  )
}

export default NotFound
