function init() {}

init();

function addMovie() {
  const movieName = document.getElementById("movieName");
  const movieRating = document.getElementById("movieRating");
  const mnValue = movieName.value;
  const mrValue = parseInt(movieRating.value);
  const newMovieListItem = document.createElement("li");
  newMovieListItem.classList.add("list-group-item");
  const spanBadge = document.createElement("span");
  spanBadge.classList.add("badge", "bg-secondary");
  spanBadge.innerText = mnValue;
  const div = document.createElement("div");

  for (let index = 0; index < mrValue; index++) {
    const star = document.createElement("img");
    star.src =
      "https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=2000";
    star.height = 50;
    star.width = 50;
    div.append(star);
  }
  newMovieListItem.append(spanBadge, div);
  document.getElementById("content").append(newMovieListItem);
}
