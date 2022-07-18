import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
  /* Busco si hay un token */
  let token = sessionStorage.getItem("token");
  /* El id de la película viaja en la ruta => en query guardo el queryString del url */
  let query = new URLSearchParams(window.location.search);
  /* saco el id del url */
  let movieId = query.get("movieId");

  /* Por defecto el movieDetail es null => renderizado condicional */
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US`;
    axios
      .get(endpoint)
      .then((res) => {
        const movieData = res.data;
        setMovieDetail(movieData);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  return (
    <>
      {/* Renderizado condicional. Si no tengo token => redirección a /login */}
      {!token && <Navigate to="/login" />}
      {/* Si tengo el token, me fijo que exista movieDetail */}
      {movieDetail && (
        <>
          <div className="flex flex-col justify-center text-white ">
            <h1>{movieDetail.title}</h1>
            <img
              className="w-52"
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              alt={`${movieDetail.title} poster`}
            />
            <p>Overview: {movieDetail.overview}</p>
            <p>Release date: {movieDetail.release_date}</p>
            <p>⭐{movieDetail.vote_average}</p>
            <p>
              Genres:{" "}
              {movieDetail.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </p>
          </div>
        </>
      )}
    </>
  );
}
