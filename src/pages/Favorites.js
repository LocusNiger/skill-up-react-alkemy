import { Navigate } from "react-router-dom";
import MovieInFavs from "../components/MovieInFavs";

export default function Favorites(props) {
  let token = sessionStorage.getItem("token"); /* Busco si hay un token */
  return (
    <>
      {/* renderizado condicional. Si no tengo token => redirección a /login */}
      {!token && <Navigate to="/login" />}
      {/* Si tengo el token entonces renderiza lo siguiente */}
      <div className="grid grid-cols-1 gap-6 box-border justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <h1 className="text-killBill text-3xl font-bold font-oswald uppercase">Your favorite movies</h1>
        {/* mapeo el array de favs y muestro las películas */}
        {/* le paso por props al componente movie todos los datos */}
        {props.favs.map((movie) => {
          return (
            <MovieInFavs
              key={movie.id}
              id={movie.id}
              title={movie.title}
              img={movie.imgURL}
              AddOrRemoveFromFavs={props.AddOrRemoveFromFavs}
            />
          );
        })}
      </div>
    </>
  );
}
