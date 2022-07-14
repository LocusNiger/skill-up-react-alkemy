import { useNavigate } from "react-router-dom";
import sweetAlert from "@sweetalert/with-react";
import { useEffect } from "react";
import Movie from "./Movie";
/* Este componente solo debe mostrarse si estas logueado (con un token) */
export default function Listado() {
  const navigate = useNavigate();

  useEffect(() => {
    /* busco si hay un token en el localStorage */
    const token = localStorage.getItem("token");
    if (token === null) {
      sweetAlert(<h3>Permiso denegado</h3>);
      /* redirecciono al login */
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-8">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </>
  );
}
