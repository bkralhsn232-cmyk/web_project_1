import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_MOVIES = [
  { id: 1, title: 'Frozen', rating: 7.4, year: 2013, poster: 'https://image.tmdb.org/t/p/w500/kg0Uq0bU9p5bIOnkF7g6fW8YI9v.jpg' },
  { id: 2, title: 'Titanic', rating: 7.8, year: 1997, poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFg8R6vXEBjQIYt.jpg' },
  { id: 3, title: 'Avatar', rating: 7.9, year: 2009, poster: 'https://image.tmdb.org/t/p/w500/kyeE67v0U4mGv6m6SKv0t3B6c0L.jpg' },
  { id: 4, title: 'Avengers', rating: 8.0, year: 2012, poster: 'https://image.tmdb.org/t/p/w500/RYMX26T6vYDWm767j61SgN601M.jpg' },
  { id: 5, title: 'Joker', rating: 8.4, year: 2019, poster: 'https://image.tmdb.org/t/p/w500/udDcl707vCwb16G3gRWPva4gaBt.jpg' },
  { id: 6, title: 'Gladiator', rating: 8.5, year: 2000, poster: 'https://image.tmdb.org/t/p/w500/ty8Tz6tgwTLyswGuwF6gYg6pt3H.jpg' },
  { id: 7, title: 'Interstellar', rating: 8.6, year: 2014, poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NIvSImsHTwZ06cB.jpg' },
  { id: 8, title: 'The Matrix', rating: 8.7, year: 1999, poster: 'https://image.tmdb.org/t/p/w500/f89ZwY9Z2wY7vA877Z3m067Sj6g.jpg' }
];

function Home() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.rating - b.rating;
    if (sortOrder === 'highToHigh') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="home-container">
      <header className="main-header">
        <div className="title-area">
          <span className="movie-icon">🎬</span>
          <h1>Movies</h1>
        </div>
        
        <div className="controls-row">
          <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <select 
            className="sort-dropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="lowToHigh">Rating: Low to High</option>
            <option value="highToHigh">Rating: High to Low</option>
          </select>
        </div>
      </header>

      <main className="movies-grid">
        {sortedMovies.map((movie) => (
          <Link to={`/forum/${movie.id}`} key={movie.id} className="movie-card-link">
            <div className="movie-card">
              <div className="movie-poster-wrap">
                <img src={movie.poster} alt={movie.title} className="movie-poster-img" />
              </div>
              <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-meta">
                  <span className="movie-rating">⭐ {movie.rating}</span>
                  <span className="movie-year">{movie.year}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home