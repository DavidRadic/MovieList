// Funktion som sorterar filmerna i alfabetisk ordning
function sortByTitle(movies) {
  return [...movies].sort((a, b) => a.title.localeCompare(b.title));
}

// Funktion som sorterar filmerna i betygsordning
function sortByRating(movies) {
  return [...movies].sort((a, b) => b.rating - a.rating);
}

export { sortByTitle, sortByRating };