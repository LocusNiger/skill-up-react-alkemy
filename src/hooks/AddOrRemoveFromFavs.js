export function AddOrRemoveFromFavs(e) {
  const favMovies = localStorage.getItem("favs"); /* compruebo si hay favoritos guardados */
  let tempMoviesInFavs; /* array temporal para ir cargando los datos */
  if (favMovies === null) {
    tempMoviesInFavs = []; /* si no hay favs => array vacío */
    console.log("No había nada");
  } else {
    tempMoviesInFavs = JSON.parse(favMovies); /* si hay, transformo en array lo que hay en LS */
  }

  /* Extraigo toda la info de la película */
  const btn = e.currentTarget;
  const parent = btn.parentElement;
  const title = parent.querySelector("h3").innerText;
  const imgURL = parent.querySelector("img").getAttribute("src");
  const rate = parent.querySelector("p").innerText;
  const id = btn.dataset.movieId;
  const movieData = {
    title,
    id,
    imgURL,
    rate,
  };

  /* Buscando si la película ya se encuentra en favoritos  */
  let movieIsInFavs = tempMoviesInFavs.find((movie) => {
    return movie.id === movieData.id;
  });
  if (movieIsInFavs === undefined) {
    /* Si es undefined -> no está => agregó la película al LS */
    tempMoviesInFavs.push(movieData);
    localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
    console.log(`Se agregó ${movieData.title} a favoritos`);
  } else {
    /* Si está la película => filtro el array y saco la que se repite */
    let moviesLeft = tempMoviesInFavs.filter((movie) => {
      return movie.id !== movieData.id;
    });
    localStorage.setItem("favs", JSON.stringify(moviesLeft));
    console.log(`Se eliminó ${movieData.title} de favoritos`);
  }
}
