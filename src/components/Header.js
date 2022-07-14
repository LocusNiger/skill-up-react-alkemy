import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto">
          <Link className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg" to="/">
            👋
          </Link>
          <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <li className=" lg:block">
              <Link className="px-3 py-2 rounded-lg" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg" to="/listado">
                Listado
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
