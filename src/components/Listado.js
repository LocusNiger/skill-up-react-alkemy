import { useNavigate } from "react-router-dom";
import sweetAlert from "@sweetalert/with-react";
import { useEffect } from "react";
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
  }, []);
  return <h2>Soy un listado</h2>;
}
