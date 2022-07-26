import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <>
      <div className="inline-block relative text-center items-center w-72 h-max box-border sm:w-11/12">
        <button
          className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute inset-4 text-lg sm:w-14 sm:h-14 sm:text-2xl"
          onClick={props.AddOrRemoveFromFavs}
          data-movie-id={props.id}
        >
          ❤️
        </button>
        {/* Botón de detalle guarda en la ruta el id de c/película */}
        <Link to={`/detail?movieId=${props.id}`} className="font-light">
          <img
            className="object-contain rounded-xl lg:w-64"
            src={`https://image.tmdb.org/t/p/w500/${props.img}`}
            alt={`${props.title}`}
          />
        </Link>
      </div>
    </>
  );
}
