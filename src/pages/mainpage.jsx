import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_MOVIES = [
  { id: 1, title: 'Frozen', rating: 7.4, year: 2013, poster: 'https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg' },
  { id: 2, title: 'Titanic', rating: 7.8, year: 1997, poster: 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png' },
  { id: 3, title: 'Avatar', rating: 7.9, year: 2009, poster: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg' },
  { id: 4, title: 'Avengers', rating: 8.0, year: 2012, poster: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg' },
  { id: 5, title: 'Joker', rating: 8.4, year: 2019, poster: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg' },
  { id: 6, title: 'Gladiator', rating: 8.5, year: 2000, poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png' },
  { id: 7, title: 'Interstellar', rating: 8.6, year: 2014, poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' },
  { id: 8, title: 'The Matrix', rating: 8.7, year: 1999, poster: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png' }
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

  const styles = {
    gridContainer: {
      display: 'grid',
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
      backgroundColor: '#32143a',
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
    },
    posterWrap: {
      width: '100%',
      aspectRatio: '2 / 3',
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
      textOverflow: 'ellipsis',
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#bdaec6',
    },
    rating: {
      color: '#f1c40f',
      fontWeight: 'bold',
    }
  };

  return (
    <div className="home-container" style={{ backgroundColor: '#1c0a21', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <header className="main-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="title-area" style={{ marginBottom: '15px' }}>
          <span className="movie-icon" style={{ fontSize: '30px' }}>🎬</span>
          <h1 style={{ display: 'inline', marginLeft: '10px', color: '#ffffff' }}>Movies</h1>
        </div>
        
        <div className="controls-row" style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '5px', border: '1px solid #4a2854', backgroundColor: '#2d1633', color: 'white', width: '250px' }}
          />
          
          <select 
            className="sort-dropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '5px', border: '1px solid #4a2854', backgroundColor: '#2d1633', color: 'white' }}
          >
            <option value="lowToHigh">Rating: Low to High</option>
            <option value="highToHigh">Rating: High to Low</option>
          </select>
        </div>
      </header>

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