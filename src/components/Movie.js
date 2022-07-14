export default function Movie() {
  return (
    <>
      <div className="flex flex-col items-center border-2 border-black rounded-md justify-self-center p-6 w-64">
        <img className="w-40" src="https://www.hyperui.dev/photos/art-1.jpeg" alt="Movie img" />
        <h5 className="mt-4 text-xl font-bold text-gray-900">Movie title</h5>
        <p className="max-w-sm mt-2 text-gray-700">Movie description</p>
      </div>
    </>
  );
}
