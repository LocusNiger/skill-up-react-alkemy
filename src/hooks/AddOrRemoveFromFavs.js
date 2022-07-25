import sweetAlert from "@sweetalert/with-react";

export function AddOrRemoveFromFavs(e) {
  const favsInLocal = localStorage.getItem("favs"); /* compruebo si hay favoritos guardados */
  let tempMoviesInFavs; /* array temporal para ir cargando los datos */
  if (favsInLocal === null) {
    tempMoviesInFavs = []; /* si no hay favs => array vacío */
  } else {
    tempMoviesInFavs = JSON.parse(favsInLocal); /* si hay, transformo en array lo que hay en LS */
  }

  /* Extraigo toda la info de la película */
  const btn = e.currentTarget;
  const parent = btn.parentElement;
  const title = parent.querySelector("h3").innerText;
  const imgURL = parent.querySelector("img").getAttribute("src");
  const id = btn.dataset.movieId;
  const movieData = {
    title,
    id,
    imgURL,
  };

  /* Busco si la película ya se encuentra en favoritos  */
  let movieIsInFavs = tempMoviesInFavs.find((movie) => {
    return movie.id === movieData.id;
  });
  if (movieIsInFavs === undefined) {
    /* Si es undefined -> no está => agregó la película al LS */
    tempMoviesInFavs.push(movieData);
    localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
    sweetAlert(<h3>Se agregó {movieData.title} a favoritos</h3>);
  } else {
    /* Si está la película => filtro el array y saco la que se repite */
    let moviesLeft = tempMoviesInFavs.filter((movie) => {
      return movie.id !== movieData.id;
    });
    localStorage.setItem("favs", JSON.stringify(moviesLeft));
    sweetAlert(<h3>Se eliminó {movieData.title} de favoritos</h3>);
  }
}
