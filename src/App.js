import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'

const featured_api =
  `https://api.themoviedb.org/3/discover/movie?api_key=d75d2931c9e3b4f869f39ded672cb3cb&sort_by=popularity.desc&page=1&language=pt-BR`

const search_api =
  `https://api.themoviedb.org/3/search/movie?api_key=d75d2931c9e3b4f869f39ded672cb3cb&language=pt-BR&query=`

function App () {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getMovies(featured_api);
  }, []);

  const getMovies = (api) => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    if (searchTerm) {
      getMovies(search_api + searchTerm)

        setSearchTerm("")
    }
  }

  const handleOnChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className='search'
            placeholder='Buscar filmes...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  )
}

export default App
