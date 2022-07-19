import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";

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
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
