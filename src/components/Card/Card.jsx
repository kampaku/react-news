import React from 'react'
import styles from './Card.module.css'

const Card = ({ article }) => {
  const { title, url, author, publishedAt, description, urlToImage } = article
  return (
    <div className={styles.card}>
      <img src={urlToImage} alt="news" className={styles.img} />
      <div className={styles.description}>
        <h3 className={styles.title}>
          <a href={url} target='_blank'>{title}</a>
        </h3>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>
          {new Date(publishedAt).toLocaleDateString()}
        </span>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  )
}

export default Card
