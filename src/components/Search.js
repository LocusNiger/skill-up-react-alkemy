import sweetAlert from "@sweetalert/with-react";

export default function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value;
    console.log(keyword);

    if (keyword.length === 0) {
      sweetAlert(<h5>Ingresa una palabra para buscar</h5>);
    } else if (keyword.length < 4) {
      sweetAlert(<h5>Debes escribir más de 4 caracteres</h5>);
    }
  };
  return (
    <>
      <form className="relative" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="search">
          {" "}
          Search{" "}
        </label>

        <input
          className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
          id="search"
          type="search"
          name="keyword"
          placeholder="Search..."
        />

        <button
          className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1"
          type="button"
          aria-label="Submit Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </>
  );
}
