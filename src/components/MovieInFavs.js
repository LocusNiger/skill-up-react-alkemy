import { Link } from "react-router-dom";

export default function MovieInFavs(props) {
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
        <img className="object-contain" src={`${props.img}`} alt={`${props.title} poster`} />
        <div className="absolute inset-x-0 bottom-0 backdrop-blur-sm h-32 mt-4 text-xl font-bold text-white  flex flex-col justify-evenly">
          <h3 className="font-medium uppercase">{props.title}</h3>
          {/* Botón de detalle guarda en la ruta el id de c/película */}
          <Link to={`/detail?movieId=${props.id}`} className="font-light">
            View detail
          </Link>
        </div>
      </div>
    </>
  );
}
