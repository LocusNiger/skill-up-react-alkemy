import { Navigate } from "react-router-dom";

export default function Detail() {
  /* Busco si hay un token */
  let token = sessionStorage.getItem("token");

  return (
    <>
      {/* renderizado condicional. Si no tengo token => redirección a /login */}
      {!token && <Navigate to="/login" />}
      {/* Si tengo el token entonces renderiza lo siguiente */}
      <h1 className="text-white">Detalle de la película</h1>
    </>
  );
}
