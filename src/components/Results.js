import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import sweetAlert from "@sweetalert/with-react";
import Movie from "./Movie";
import HomeSearch from "./HomeSearch";

export default function Results(props) {
  const [params] = useSearchParams(); /* Keyword viaja en la ruta */
  const keyword = params.get("keyword"); /* saco el keyword del url */
  const [results, setResults] = useState([]);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US&page=1&query=${keyword}`;
    axios
      .get(endpoint)
      .then((res) => {
        const moviesResults = res.data.results;
        setResults(moviesResults);
      })
      .catch((error) => {
        console.log(error);
        sweetAlert(<h2>Something is wrong. Try again later</h2>);
      });
  }, [keyword]);

  results.splice(8, 19);
  return (
    <>
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <div className=" w-4/6 my-10">
          <HomeSearch />
        </div>
        <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4 h-auto sm:mb-10">
          Search results for "{keyword}"
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-4">
        {/* mapeo los resultados de la búsqueda y muestro las películas */}
        {/* le paso por props al componente movie todos los datos */}
        {results.map((movie) => {
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
