import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_MOVIES = [
  { id: 1, title: 'Frozen', rating: 7.4, year: 2013, poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=300&q=80' },
  { id: 2, title: 'Titanic', rating: 7.8, year: 1997, poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80' },
  { id: 3, title: 'Avatar', rating: 7.9, year: 2009, poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80' },
  { id: 4, title: 'Avengers', rating: 8.0, year: 2012, poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=300&q=80' },
  { id: 5, title: 'Joker', rating: 8.4, year: 2019, poster: 'https://images.unsplash.com/photo-1601513525393-039377b6ddb7?auto=format&fit=crop&w=300&q=80' },
  { id: 6, title: 'Gladiator', rating: 8.5, year: 2000, poster: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?auto=format&fit=crop&w=300&q=80' },
  { id: 7, title: 'Interstellar', rating: 8.6, year: 2014, poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80' },
  { id: 8, title: 'The Matrix', rating: 8.7, year: 1999, poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80' }
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

export default Home;