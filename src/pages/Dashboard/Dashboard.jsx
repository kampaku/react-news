import React, { useState, useEffect } from 'react'
import styles from './Dashboard.module.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import NewsApi from '../../services/newsApi'
import Loader from '../../components/Loader/Loader'
import Articles from '../../components/Articles/Articles'
import Pagination from '../../components/Pagination/Pagination'
import getPagesCount from '../../utils/getPagesCount'
import useFetching from '../../hooks/useFetching'

function Dashboard() {
  const newsApi = new NewsApi()
  const [searchOptions, setSearchOptions] = useState(null)
  const [response, setResponse] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const [fetching, isLoading, error] = useFetching(async () => {
    const res = await newsApi.getNews(searchOptions)
    if (res.status === 'error') throw res
    setResponse(res)
    setTotalPages(getPagesCount(res.totalResults, searchOptions.resultsNumber))
  })

  useEffect(() => {
    if (searchOptions) {
      fetching(searchOptions)
      setPage(searchOptions.page)
    }
  }, [searchOptions])

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Новости</h1>
      <SearchForm setSearchOptions={setSearchOptions} />
      <div className={styles.news}>
        {error ? (<p>${error}</p>) : (null)}
        {isLoading ? <Loader /> : <Articles articles={response.articles} />}
      </div>
      <div className={styles.pagination}>
        {response.articles ? (
          <Pagination
            page={page}
            setPage={setPage}
            setSearchOptions={setSearchOptions}
            results={totalPages}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Dashboard
