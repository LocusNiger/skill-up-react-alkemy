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
        <Link to={`/detail?movieId=${props.id}`}>
          <img
            className="w-72 lg:w-52 rounded-xl"
            src={`https://image.tmdb.org/t/p/w500/${props.img}`}
            alt={`${props.title} poster`}
          />
        </Link>
      </div>
    </>
  );
}
