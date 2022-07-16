export default function Movie(props) {
  return (
    <>
      <div className="flex flex-col items-center border-2 border-black rounded-md  p-6 w-64">
        <img className="w-40" src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt="Movie img" />
        <h5 className="mt-4 text-xl font-bold text-gray-900">{props.title}</h5>
        <p className="max-w-sm mt-2 text-gray-700">{props.overview}</p>
      </div>
    </>
  );
}
