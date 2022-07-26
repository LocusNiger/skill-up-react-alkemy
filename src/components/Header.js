import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <>
      <header className="bg-gray-900">
        <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto">
          <ul className="flex items-center text-sm font-medium text-white">
            <li>
              <Link className="px-3 py-2 rounded-lg" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="px-3 py-2 rounded-lg" to="/listado">
                Trending
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg" to="/favorites">
                Favorites
              </Link>
            </li>
          </ul>
          <Search />
        </nav>
      </header>
    </>
  );
}

export default Header;
