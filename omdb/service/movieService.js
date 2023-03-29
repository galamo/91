const searchUrl = "API URL + KEY "; //TBD
const searchBaseUrl = `http://www.omdbapi.com/?apikey=ffa5acbc`;
async function searchMoviesApi(searchParam) {
  if (typeof searchParam !== "string") throw new Error("Missing param");
  const result = await fetch(`${searchBaseUrl}&s=${searchParam}`, {
    method: "GET",
  });
  const resultJson = await result.json();
  return resultJson.Search;
}
