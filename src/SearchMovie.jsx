import { useState } from "react";

export const SearchMovie = () => {
  const urlMovie = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = 'YOURAPIKEY'
  const [search, setsearch] = useState("");
  const [movies, setmovies] = useState([])

  const handleInputChange = (e) => {
    setsearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchMovies()
  }

  const fetchMovies = async () => {
    try {
        const response = await fetch(`${urlMovie}?query=${search}&api_key=${API_KEY}`)
        const data = await response.json()
        setmovies(data.results)

    } catch (error) {
        console.error('Ha ocurrido un error')
        
    }
  }

  return (
    <div className="container">
      <h1>neiflex search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type a movie"
          value={search}
          onChange={handleInputChange}
        />

        <button type="submit" className="search-button">Search</button>
      </form>

    <div className="movie-list">
        {movies.map( (movie) => ( 
            <div key={movie.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p> {movie.overview} </p>
            </div>
        ))}
    </div>
    
    </div>
  )
}
