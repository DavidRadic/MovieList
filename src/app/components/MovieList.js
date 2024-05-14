//Importerar relevant data
import React from 'react';
import StarRating from './StarRating';
import './style.css'; 

function MovieList({ movies, deleteMovie }) {
  const handleDelete = (index) => {
    deleteMovie(index);
  };

  return (
    // Lista över filmerna
    <ul id="movies">
      {movies.map((movie, index) => (
        <li key={index} className="movie-item" data-grade={movie.rating} data-title={movie.title}>
          <span>{movie.title}</span>
          <StarRating rating={movie.rating} className="star-rating" /> {/* Använda flex-egenskaper för att placera stjärnorna till höger */}
          <img
            src="/delete.png"
            alt="Delete movie"
            className="delete-movie-icon"
            onClick={() => handleDelete(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
