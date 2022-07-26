import { Navigate } from "react-router-dom";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import sweetAlert from "@sweetalert/with-react";

/* Este componente solo debe mostrarse si estas logueado (con un token) */
export default function Listado(props) {
  /* Busco si hay un token */
  let token = sessionStorage.getItem("token");
  /* Estado para manejar el array de peliculas. Array vacío */
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endpoint = "https://api.themoviedb.org/3/trending/movie/week?api_key=9cc2ccd6d9648c49e03bee3c9b88a569";
    /* petición a la API */
    axios
      .get(endpoint)
      .then((response) => {
        /* seteo los datos en el array de películas */
        setMoviesList(response.data.results);
      })
      /* manejo de errores */
      .catch((error) => {
        console.log(error);
        sweetAlert(<h2>Lo siento, estamos teniendo fallas. Intenta de nuevo más tarde</h2>);
      });
  }, [setMoviesList]);

  return (
    <>
      {/* renderizado condicional. Si no tengo token => redirección a /login */}
      {!token && <Navigate to="/login" />}
      {/* Si tengo el token entonces renderiza lo siguiente */}

      <div className="max-w-screen-xl px-4 pt-12 mx-auto lg:items-center lg:flex ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4 h-14">
            Trending movies
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-900">
        {/* mapeo el movielist y muestro las películas */}
        {/* le paso por props al componente movie todos los datos */}
        {moviesList.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              img={movie.poster_path}
              date={movie.release_date}
              rate={movie.vote_average}
              AddOrRemoveFromFavs={props.AddOrRemoveFromFavs}
            />
          );
        })}
      </div>
    </>
  );
}
