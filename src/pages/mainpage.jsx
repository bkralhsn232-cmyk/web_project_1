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

  // --- INLINE STYLES DEFINITION ---
  const styles = {
    gridContainer: {
      display: 'grid',
      // This automatically creates columns that fit perfectly on any screen size
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '25px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    cardLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    card: {
      backgroundColor: '#2c3e50', // Dark elegant background matching your navbar
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    posterWrap: {
      width: '100%',
      aspectRatio: '2 / 3', // Maintains professional movie poster proportions
      overflow: 'hidden',
    },
    posterImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    details: {
      padding: '15px',
      color: 'white',
      textAlign: 'center',
    },
    title: {
      margin: '0 0 8px 0',
      fontSize: '18px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis', // Adds ... if text is too long
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#bdc3c7',
    },
    rating: {
      color: '#f1c40f', // Bright gold for stars
      fontWeight: 'bold',
    }
  };

  return (
    <div className="home-container" style={{ padding: '20px' }}>
      <header className="main-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="title-area" style={{ marginBottom: '15px' }}>
          <span className="movie-icon" style={{ fontSize: '30px' }}>🎬</span>
          <h1 style={{ display: 'inline', marginLeft: '10px' }}>Movies</h1>
        </div>
        
        <div className="controls-row" style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }}
          />
          
          <select 
            className="sort-dropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="lowToHigh">Rating: Low to High</option>
            <option value="highToHigh">Rating: High to Low</option>
          </select>
        </div>
      </header>

      {/* Applying the grid structure straight to the main tag */}
      <main style={styles.gridContainer}>
        {sortedMovies.map((movie) => (
          <Link to={`/forum/${movie.id}`} key={movie.id} style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.posterWrap}>
                <img src={movie.poster} alt={movie.title} style={styles.posterImg} />
              </div>
              <div style={styles.details}>
                <h3 style={styles.title}>{movie.title}</h3>
                <div style={styles.meta}>
                  <span style={styles.rating}>⭐ {movie.rating}</span>
                  <span>{movie.year}</span>
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