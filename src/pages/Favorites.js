import { Navigate } from "react-router-dom";
import MovieInFavs from "../components/MovieInFavs";

export default function Favorites(props) {
  let token = sessionStorage.getItem("token"); /* Busco si hay un token */
  return (
    <>
      {/* renderizado condicional. Si no tengo token => redirección a /login */}
      {!token && <Navigate to="/login" />}
      {/* Si tengo el token entonces renderiza lo siguiente */}
      <div className="max-w-screen-xl px-4 pt-12 mx-auto lg:items-center lg:flex ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4 h-14 sm:mb-10">
            Your favorite movies
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-4">
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
