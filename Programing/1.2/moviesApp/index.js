function init() {}

init();

function addMovie() {
  const movieName = document.getElementById("movieName");
  const movieRating = document.getElementById("movieRating");
  const mnValue = movieName.value;
  const mrValue = parseInt(movieRating.value);
  const newMovieListItem = document.createElement("li");
  const spanBadge = document.createElement("span");
  spanBadge.classList.add("badge", "bg-secondary");
  spanBadge.innerText = mnValue;
  const div = document.createElement("div");
  const movieId = `${mnValue}_${new Date().getTime()}`;
  for (let index = 0; index < mrValue; index++) {
    const star = document.createElement("img");
    star.src =
      "https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=2000";
    star.height = 50;
    star.width = 50;
    div.append(star);
  }
  const deleteButton = getDeleteButton(movieId);
  newMovieListItem.append(spanBadge, div, deleteButton);
  newMovieListItem.id = movieId;
  newMovieListItem.classList.add("list-group-item", "movie-item");

  newMovieListItem.onclick = function () {
    // this=> newMovieListItem
    clearAllListItems(movieId); //movieId of the clicked element
    this.classList.toggle("colorMeInPink");
  };

  document.getElementById("content").append(newMovieListItem);
}

function clearAllListItems(mid) {
  const allListItems = document.getElementsByClassName("list-group-item");
  for (let index = 0; index < allListItems.length; index++) {
    if (allListItems[index].id !== mid) {
      allListItems[index].classList.remove("colorMeInPink");
    }
  }
}

function getDeleteButton(id) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  const iconSpan = document.createElement("span");
  iconSpan.classList.add("bi", "bi-trash");
  deleteButton.append(iconSpan);
  deleteButton.onclick = function () {
    // this.parentElement.remove();  i need to change this code!?
    document.getElementById(id).remove();
  };
  return deleteButton;
}

function changeColor() {
  const header = document.getElementById("mainHeader");
  header.style.color = "red";
  header.innerText = "Movies";
}

function clearMovies() {
  const ul = document.getElementById("content");
  ul.innerHTML = "";
}
