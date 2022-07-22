import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <>
      <header className="bg-midnight font-sans">
        <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto">
          <Link className="inline-flex items-center justify-center w-10 h-10 text-killBill" to="/">
            Home
          </Link>
          <ul className="flex items-center space-x-2 text-sm font-medium text-killBill">
            <li className="lg:block">
              <Link className="px-3 py-2 rounded-lg" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg" to="/listado">
                Trending
              </Link>
            </li>
            <li>
              <Link className="px-3 py-2 rounded-lg" to="/favorites">
                FAVS
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
