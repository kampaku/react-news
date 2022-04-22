import React from 'react'

import SearchIcon from './search.svg'
import styles from './SearchButton.css'

const SearchButton = () => (
  <>
    <button className={styles.button} type="submit">
      <SearchIcon />
    </button>
  </>
)

export default SearchButton
