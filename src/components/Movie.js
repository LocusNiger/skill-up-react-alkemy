import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <>
      <div className="inline-block relative text-center items-center w-72 h-max box-border ">
        <button
          className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute inset-4 text-lg"
          onClick={props.AddOrRemoveFromFavs}
          data-movie-id={props.id}
        >
          ❤️
        </button>
        {/* Botón de detalle guarda en la ruta el id de c/película */}
        <Link to={`/detail?movieId=${props.id}`} className="font-light">
          <img
            className="object-contain rounded-xl"
            src={`https://image.tmdb.org/t/p/w500/${props.img}`}
            alt={`${props.title}`}
          />
        </Link>
      </div>
    </>
  );
}
