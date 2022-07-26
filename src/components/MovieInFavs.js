import { Link } from "react-router-dom";

export default function MovieInFavs(props) {
  return (
    <>
      <div className="inline-block relative text-center items-center w-72 h-max box-border sm:w-11/12 ">
        <button
          className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute inset-4 text-lg"
          onClick={props.AddOrRemoveFromFavs}
          data-movie-id={props.id}
        >
          ❤️
        </button>
        <Link to={`/detail?movieId=${props.id}`}>
          <img
            className="object-contain rounded-xl lg:w-64"
            src={`https://image.tmdb.org/t/p/w500/${props.img}`}
            alt={`${props.title} `}
          />
        </Link>
      </div>
    </>
  );
}
