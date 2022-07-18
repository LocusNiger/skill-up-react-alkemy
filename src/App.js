import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* cuando el path sea "" el componente a cargar es "" */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
