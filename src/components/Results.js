import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import sweetAlert from "@sweetalert/with-react";
import Movie from "./Movie";

export default function Results() {
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
  return (
    <>
      <div className="grid grid-cols-1 gap-6 box-border justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <h1 className="text-killBill text-3xl font-bold font-oswald uppercase">Search results: {keyword}</h1>
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
            />
          );
        })}
      </div>
    </>
  );
}
