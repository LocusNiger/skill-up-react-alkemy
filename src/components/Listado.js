import { Navigate } from "react-router-dom";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import axios from "axios";

/* Este componente solo debe mostrarse si estas logueado (con un token) */
export default function Listado() {
  /* Busco si hay un token */
  let token = localStorage.getItem("token");
  /* Estado para manejar el array de peliculas. Array vacío */
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endpoint = "https://api.themoviedb.org/3/trending/movie/week?api_key=9cc2ccd6d9648c49e03bee3c9b88a569";
    /* petición a la API */
    axios.get(endpoint).then((response) => {
      /* seteo en el array de películas */
      setMoviesList(response.data.results);
    });
  }, [setMoviesList]);

  console.log(moviesList);
  return (
    <>
      {/* renderizado condicional. Si no tengo token => redirección a /login */}
      {!token && <Navigate to="/login" />}
      {/* Si tengo el token entonces renderiza lo siguiente */}

      {/* mapeo el movielist y muestro las películas */}
      {moviesList.map((movie, idx) => {
        return <Movie key={idx} title={movie.title} overview={movie.overview} img={movie.poster_path} />;
      })}
    </>
  );
}
