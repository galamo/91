function loadFavoritesMovies() {
  const favoritesMoviesLocal = [];
  const numOfMovies = parseInt(prompt("Please Enter Movies"));
  for (let index = 0; index < numOfMovies; index++) {
    addNewMovie(favoritesMoviesLocal);
  }
  return favoritesMoviesLocal;
}
const globalFavorites = loadFavoritesMovies();

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
const result = getHighRatingMovies(globalFavorites, minRating);
console.log("after min rating filter", result);
function addNewMovie(favoritesMoviesLocal) {
  const movieName = prompt("Please Enter movie name");
  const movieRating = parseInt(prompt("Please Enter your rating"));
  const currentMovie = {
    movieName: movieName,
    rating: movieRating,
    setRating: function (newRating) {
      if (typeof newRating !== "number") return;
      if (newRating >= 1 && newRating <= 5) {
        this.rating = newRating;
      }
    },
  };
  favoritesMoviesLocal.push(currentMovie);
}

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
