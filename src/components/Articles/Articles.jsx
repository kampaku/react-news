import React from 'react'
import styles from './Articles.module.css'

import Card from '../Card/Card'

const Articles = ({ articles }) => {
  if (!articles) return
  return (
    <div className={styles.results}>
      {articles.length > 0
        ? articles.map((article, i) => <Card key={i} article={article} />)
        : null}
    </div>
  )
}

export default Articles
