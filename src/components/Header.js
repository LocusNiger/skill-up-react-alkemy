import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-900">
        <nav className="max-w-3xl p-4 mx-auto">
          <ul className="flex justify-end text-base text-white">
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
        </nav>
      </header>
    </>
  );
}

export default Header;
