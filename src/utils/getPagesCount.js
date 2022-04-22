const getPagesCount = (totalCount, limit) => {
  if (totalCount > 100) totalCount = 100
  return Math.ceil(totalCount / limit)
}

export default getPagesCount
