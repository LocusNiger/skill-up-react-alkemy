import axios from "axios";
import sweetAlert from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  /* hook para redireccionar a otra ruta */
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    /* Validación del mail y password */
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      sweetAlert(<h3>Los campos no pueden estar vacíos</h3>);
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      sweetAlert(<h3>Debes escribir una dirección de correo electrónico válida</h3>);
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      sweetAlert(<h3>Credenciales inválidas</h3>);
      return;
    }

    /* Petición a la API que retorna el token con librería AXIOS*/
    axios
      /* 1er parámetro: url API. 2do: datos a mandar. */
      .post("http://challenge-react.alkemy.org", { email, password })
      /* Retorna una promesa. Guardo el token en el localStorage */
      .then((res) => {
        sweetAlert(<h3>Credenciales válidas</h3>);
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        /* redirecciono para mostrar el componente listado */
        navigate("/listado");
      });
  };
  let token = localStorage.getItem("token");
  return (
    <>
      {/* Renderizado condicional. Si tengo el token => redirige a listado */}
      {token && <Navigate to="/listado" />}
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem,
            at itaque nostrum!
          </p>
        </div>

        <form className="max-w-md mx-auto mt-8 mb-0 space-y-4" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                id="email"
              />
              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                id="password"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
