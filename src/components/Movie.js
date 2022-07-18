import { Link } from "react-router-dom";

export default function Movie(props) {
  /* formateando fecha */
  let mm = props.date.substring(5, 7);
  let aa = props.date.substring(0, 4);
  return (
    <>
      <div className="inline-block relative text-center items-center w-72 h-max box-border ">
        <img
          className="object-contain"
          src={`https://image.tmdb.org/t/p/w500/${props.img}`}
          alt={`${props.title} poster`}
        />
        <div className="absolute inset-x-0 bottom-0 backdrop-blur-md h-32 mt-4 text-xl font-bold text-white  flex flex-col justify-evenly font-sans">
          <p>{props.title}</p>
          <p>{`${mm}/${aa}`}</p>
          <p>⭐ {props.rate.toFixed(1)}</p>
          {/* Botón de detalle guarda en la ruta el id de c/película */}
          <Link to={`/detail?movieId=${props.id}`}>View detail</Link>
        </div>
      </div>
    </>
  );
}
