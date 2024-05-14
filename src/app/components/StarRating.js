//Importerar relevant data
import React from 'react';

//Funktion som placerar ut antal stjärnor beroende av betyg som användaren anger
function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src="/star.png" alt="Star" />);
  }
  return <div>{stars}</div>;
}

export default StarRating;