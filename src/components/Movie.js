import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <>
      <div className="inline-block relative text-center items-center w-72 h-max box-border ">
        <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute inset-4 text-lg">
          ❤️
        </button>
        <img
          className="object-contain"
          src={`https://image.tmdb.org/t/p/w500/${props.img}`}
          alt={`${props.title} poster`}
        />

        <div className="absolute inset-x-0 bottom-0 backdrop-blur-sm h-32 mt-4 text-xl font-bold text-white  flex flex-col justify-evenly">
          <p className="font-medium uppercase">{props.title}</p>
          <p className="font-light">⭐ {props.rate.toFixed(1)}</p>
          {/* Botón de detalle guarda en la ruta el id de c/película */}
          <Link to={`/detail?movieId=${props.id}`} className="font-light">
            View detail
          </Link>
        </div>
      </div>
    </>
  );
}
