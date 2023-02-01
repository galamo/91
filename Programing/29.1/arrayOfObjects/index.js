// ex1 start
function loadFavoritesMovies() {
  const favoritesMoviesLocal = [];
  const numOfMovies = parseInt(prompt("Please Enter Movies"));
  for (let index = 0; index < numOfMovies; index++) {
    addNewMovie(favoritesMoviesLocal);
  }
  return favoritesMoviesLocal;
}
const globalFavorites = loadFavoritesMovies();
// ex1 ends
// ex2 start
// this is not a sort! this is not i dont want the higher rating!
// i want a FILTER!
function getHighRatingMovies(arrayOfMovies, minRating) {
  if (typeof minRating !== "number") return;
  if (Array.isArray(arrayOfMovies) === false) return;
  const highRatingMovies = [];
  for (let index = 0; index < arrayOfMovies.length; index++) {
    const currentMovie = arrayOfMovies[index];
    if (currentMovie.rating > minRating) {
      highRatingMovies.push(currentMovie);
    }
  }
  return highRatingMovies;
}
const minRating = parseInt(prompt("give me minRating or ill shoot you!"));
// connect this part to the DOM  coming soon at 19:32 dont miss!
const result = getHighRatingMovies(globalFavorites, minRating);
console.log("after min rating filter", result);
function addNewMovie(favoritesMoviesLocal) {
  const movieName = prompt("Please Enter movie name");
  const movieRating = parseInt(prompt("Please Enter your rating"));
  const currentMovie = {
    movieName: movieName,
    rating: movieRating,
  };
  favoritesMoviesLocal.push(currentMovie);
}
// ex2 ends

function deleteMovie(arrayOfMovies, movieNameToDelete) {
  if (typeof movieNameToDelete !== "string") return;
  if (Array.isArray(arrayOfMovies) === false) return;

  for (let index = 0; index < arrayOfMovies.length; index++) {
    const currentMovie = arrayOfMovies[index];
    if (
      currentMovie.movieName.toLowerCase() === movieNameToDelete.toLowerCase()
    ) {
      arrayOfMovies.splice(index, 1);
    }
  }
}

// splice??!
