import React, { useState } from 'react'

import SearchButton from '../SearchButton/SearchButton'
import Select from '../Select/Select'
import styles from './SearchForm.module.css'

const SearchForm = ({ setSearchOptions }) => {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('relevancy')
  const [resultsNumber, setResultsNumber] = useState(10)

  const handleInput = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.length === 0) return
    setSearchOptions((state) => ({
      ...state,
      query,
      sort,
      resultsNumber,
      page: 1
    }))
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.bar}>
          <input type="text" onChange={handleInput} className={styles.input} />
          <SearchButton />
        </div>
        <div className={styles.searchOptions}>
          <Select
            onChange={(value) => setSort(value)}
            options={[
              { value: 'relevancy', label: 'Релевантности' },
              { value: 'popularity', label: 'Популярности' },
              { value: 'publishedAt', label: 'Дате публикации' },
            ]}
            defaultVal={sort}
            label={'Сортировать по: '}
          />

          <Select
            onChange={(value) => setResultsNumber(value)}
            options={[
              { value: 10, label: '10' },
              { value: 20, label: '20' },
            ]}
            defaultVal={resultsNumber}
            label={'Новостей на странице: '}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
