import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TrendingInHome() {
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
      });
  }, [setMoviesList]);

  moviesList.splice(5, 19);

  return (
    <>
      <h4 className="text-3xl text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 h-14 text-center mb-10 font-bold">
        Top 5 trending movies
      </h4>
      <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 lg:before:w-0 lg:after:w-0 lg:justify-around ">
        {moviesList.map((movie) => (
          <li key={movie.id} className="shrink-0 snap-center">
            <img
              className="w-72 lg:w-52"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-10">
        <p className="text-3xl text-white font-bold underline underline-offset-4">
          <Link to={`/listado`}> See more </Link>
        </p>
      </div>
    </>
  );
}
