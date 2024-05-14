"use client"; // Markerar som en klientkomponent för att det ska gå att använda useEffect och useState

//Importerar relevant data
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function Pages() {
  const [movies, setMovies] = useState([]);
  //Funktion som gör så att användaren kan lägga till en film i listan
  const handleAddMovie = (title, rating) => {
    const newMovie = { title, rating };
    setMovies([...movies, newMovie]);
  };

  //Funktion som gör så att användaren kan tabort  en film från listan
  const handleDeleteMovie = (index) => {
    const updatedMovies = movies.filter((movie, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <fieldset>
        <legend>Lägg till en film</legend>
        <MovieForm AddMovie={handleAddMovie} />
      </fieldset>
      <hr />
      <h2>Filmer</h2>
      <MovieList movies={movies} deleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default Pages;