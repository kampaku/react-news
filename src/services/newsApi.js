export default class NewsApi {
  constructor() {
    this.url = 'https://newsapi.org/v2/everything?'
    this.key = 'a30f74a98ade4b9c92eb86bf6ad8c834'
  }

  async getNews({ query, sort, resultsNumber, page = 1 }) {
    const res = await fetch(
      `${this.url}q=${query}&sortBy=${sort}&pageSize=${resultsNumber}&page=${page}&apiKey=${this.key}`
    )

    const news = await res.json()
    return news

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({'totalResults': 83})
    //   }, 1000)
    // })
  }
}
