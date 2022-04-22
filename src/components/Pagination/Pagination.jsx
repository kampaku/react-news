import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ page, setPage, setSearchOptions, results = 0 }) => {
  const onChangeInput = (num) => {
    const regexp = /^\d+$/
    const isNumber = regexp.test(num)
    if (isNumber) {
      setPage(Number(num))
    } else {
      setPage('')
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!page || page > results) page = 1
    setSearchOptions((state) => ({
      ...state,
      page,
    }))
  }

  const onClick = (num) => {
    page += num
    if (page < 1 || page > results) return
    setSearchOptions((state) => ({
      ...state,
      page: page,
    }))
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationBtn}
        type="button"
        onClick={() => onClick(-1)}
        disabled={page < 2}
      >
        {'<'}
      </button>
      <form onSubmit={onSubmit}>
        <input
        className={styles.input}
          type="number"
          value={page}
          onChange={({ target }) => onChangeInput(target.value)}
        />
      </form>
      <button
        onClick={() => onClick(1)}
        className={styles.paginationBtn}
        type="button"
      >
        {'>'}
      </button>
      <span>Всего страниц: {results}</span>
    </div>
  )
}

export default Pagination
