import sweetAlert from "@sweetalert/with-react";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!token) {
      /* si no está logueado te manda a loguear */
      sweetAlert(<h3>Log in for search</h3>);
      navigate("/login");
    } else {
      const keyword = e.currentTarget.keyword.value.trim();
      if (keyword.length === 0) {
        sweetAlert(<h5>Ingresa una palabra para buscar</h5>);
      } else if (keyword.length < 1) {
        sweetAlert(<h5>Debes escribir más de 1 caracter</h5>);
      } else {
        /* Si pasa las 2 validaciones:  */
        const params = { keyword: keyword };
        navigate({
          pathname: "/results",
          search: `?${createSearchParams(params)}`,
        });
        e.currentTarget.keyword.value = "";
      }
    }
  };
  return (
    <>
      <form className="relative" onSubmit={handleSearch}>
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
