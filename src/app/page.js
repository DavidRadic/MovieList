"use client"; // Markerar som en klientkomponent för att det ska gå att använda useState

//Importerar relevant data
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import { sortByTitle, sortByRating } from './components/SortMovies'; 

function Pages() {
  const [movies, setMovies] = useState([]);

  //Funktion som gör så att användaren kan lägga till en film i listan
  const handleAddMovie = (title, rating) => {
    const newMovie = { title, rating };
    setMovies([...movies, newMovie]);
  };

  //Funktion som gör så att användaren kan ta bort en film från listan
  const handleDeleteMovie = (index) => {
    const updatedMovies = movies.filter((movie, i) => i !== index);
    setMovies(updatedMovies);
  };

  //Funktion som sorterar filmerna efter titel
  const handleSortByTitle = () => {
    setMovies(sortByTitle(movies));
  };

  //Funktion som sorterar filmerna efter betyg
  const handleSortByRating = () => {
    setMovies(sortByRating(movies));
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <fieldset>
        <legend>Lägg till en film</legend>
        <MovieForm AddMovie={handleAddMovie} />
      </fieldset>
      <hr />
      <h2>Inlagda filmer</h2>
      <MovieList movies={movies} deleteMovie={handleDeleteMovie} />
      <div className="mt-3"> {}
        <button onClick ={handleSortByTitle} className="btn btn-primary m-2">Alfabetiskordning</button>
        <button onClick ={handleSortByRating} className="btn btn-primary m-2">Betygsordning</button>
      </div>
    </div>
  );
}

export default Pages;