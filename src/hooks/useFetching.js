import { useState } from 'react'

const useFetching = (callback) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    try {
      setLoading(true)
      setError('')
      await callback(...args)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetching, isLoading, error]
}

export default useFetching
