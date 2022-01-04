import React from 'react'

const image_api = 'https://image.tmdb.org/t/p/w1280'
const generic_img =
  'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80'

const setVoteClass = vote => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 6) {
    return 'orange'
  } else {
    return 'red'
  }
}

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className='movie'>
    <img
      src={poster_path ? image_api + poster_path : generic_img}
      alt={title}
    />
    <div className='movie-info'>
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average !== 0 ? vote_average : "?"}
      </span>
    </div>

    <div className='movie-over'>
      <h2>Overview: </h2>
      <p>{overview.length > 0 ? overview : "Indisponível"}</p>
    </div>
  </div>
)

export default Movie
