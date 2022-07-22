import { useState, useEffect } from "react";
import Movie from "../components/Movie";

export default function Favorites() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs"); /* compruebo si hay favoritos guardados */
    if (favsInLocal !== null) {
      let favsArray = JSON.parse(favsInLocal);
      setFavs(favsArray);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 box-border justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <h1 className="text-killBill text-3xl font-bold font-oswald uppercase">Your favorite movies</h1>
        {/* mapeo el movielist y muestro las películas */}
        {/* le paso por props al componente movie todos los datos */}
        {favs.map((movie) => {
          return <Movie key={movie.id} id={movie.id} title={movie.title} img={movie.imgURL} rate={movie.rate} />;
        })}
      </div>
    </>
  );
}
