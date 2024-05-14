// page.js fil
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SearchField from './ska-vara-component-mapp/SearchField';
import MovieList from './ska-vara-component-mapp/MovieList';

function Pages() {
  const [movies, setMovies] = useState([]);

  // Flytta definitionen av searchMovies utanför useEffect
  const searchMovies = async (searchField) => {
    const apiKey = 'e0f0b0dd';
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchField}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Använd useEffect för att göra API-anropet endast på klientsidan
    searchMovies(''); // Uppdatera resultat för att visa alla filmer vid första renderingen
  }, []); // Tomt beroende, körs bara en gång vid första renderingen

  return (
    <div className="container">
      <h1>MovieFinder - King of movies</h1>
      <fieldset>
        <legend>Sök efter filmer här</legend>
        {/* Skicka onSearch som prop till SearchField */}
        <SearchField onSearch={(searchTerm) => searchMovies(searchTerm)} />
      </fieldset>
      <hr />
      <h2>Sökresultat</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default Pages;
