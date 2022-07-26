import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import sweetAlert from "@sweetalert/with-react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";

function App() {
  const favsInLocal = localStorage.getItem("favs"); /* compruebo si hay favoritos guardados */
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    if (favsInLocal !== null) {
      /* si hay favs en LS, los guardo en una var y lo seteo */
      let favsArray = JSON.parse(favsInLocal);
      setFavs(favsArray);
    }
  }, [favsInLocal]);

  const AddOrRemoveFromFavs = (e) => {
    let tempMoviesInFavs; /* array temporal para ir cargando los datos */
    if (favsInLocal === null) {
      tempMoviesInFavs = []; /* si no hay favs => array vacío */
    } else {
      tempMoviesInFavs = JSON.parse(favsInLocal); /* si hay, transformo en array lo que hay en LS */
    }

    /* Extraigo toda la info de la película */
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const title = parent.querySelector("img").getAttribute("alt");
    const imgURL = parent.querySelector("img").getAttribute("src");
    const id = btn.dataset.movieId;
    const movieData = {
      title,
      id,
      imgURL,
    };

    /* Busco si la película ya se encuentra en favoritos  */
    let movieIsInFavs = tempMoviesInFavs.find((movie) => {
      return movie.id === movieData.id;
    });
    if (movieIsInFavs === undefined) {
      /* Si es undefined -> no está => agregó la película al LS y la seteo en el estado */
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavs(tempMoviesInFavs);
      sweetAlert(<h3>Se agregó {movieData.title} a favoritos</h3>);
    } else {
      /* Si está la película => filtro el array y saco la que se repite */
      let moviesLeft = tempMoviesInFavs.filter((movie) => {
        return movie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavs(moviesLeft);
      sweetAlert(<h3>Se eliminó {movieData.title} de favoritos</h3>);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        {/* cuando el path sea "" el componente a cargar es "" */}
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites AddOrRemoveFromFavs={AddOrRemoveFromFavs} favs={favs} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listado" element={<Listado AddOrRemoveFromFavs={AddOrRemoveFromFavs} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
