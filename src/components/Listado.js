import { Navigate } from "react-router-dom";
import Movie from "./Movie";
/* Este componente solo debe mostrarse si estas logueado (con un token) */
export default function Listado() {
  /* Busco si hay un token */
  let token = localStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/login" />}
      <div className="grid grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-8">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </>
  );
}
