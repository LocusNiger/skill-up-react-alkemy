import HomeWithLogin from "../components/HomeWithLogin";
import HomeWithoutLogin from "../components/HomeWithoutLogin";

export default function Home() {
  /* Busco si hay un token */
  let token = sessionStorage.getItem("token");

  return (
    <>
      {/* si no tengo token renderizo el login */}
      {!token ? <HomeWithoutLogin /> : <HomeWithLogin />}
      {/* Si tengo el token entonces renderiza lo siguiente */}
    </>
  );
}
