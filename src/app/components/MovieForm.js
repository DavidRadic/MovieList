//Importerar relevant data
import React, { useState } from 'react';

//Hanterar film formuläret för att lägga till en film
function MovieForm({ AddMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput(title, rating)) {
      AddMovie(title, rating);
      resetForm();
    }
  };

  //Kontrollerar så att användaren har angett både titel och betyg innan det läggs till i listan
  const validateInput = (title, rating) => {
    if (title.trim() === "") {
      alert("Du måste ange en titel för att kunna spara filmen");
      return false;
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
      alert("Du måste ange ett betyg för att kunna spara filmen");
      return false;
    }
    return true;
  };

  //Funktion som återställer formulärets som det var ursprungligen
  const resetForm = () => {
    setTitle('');
    setRating(0);
  };

  return (
    //Formulär för att lägga till en ny film
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title-field" className="form-label">Titel:</label>
        <input
          type="text"
          id="title-field"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rating-field" className="form-label">Betyg:</label>
        <select
          id="rating-field"
          className="form-select"
          value={rating}
          onChange={(event) => setRating(parseInt(event.target.value))}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success mt-3">Spara film</button>
    </form>
  );
}

export default MovieForm;