import "./App.css";
import { Cursos } from "./components/cursos";
import FormRegister from "./components/FormRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReporteCurso from "./components/ReporteCurso";
import CursoCarousel from "./components/CursoCarousel";
import Desinscripcion from "./components/Desinscripcion";

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          {" "}
          <Route exact path="/" element={<CursoCarousel />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/persona/:id" element={<FormRegister />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/curso" element={<Cursos />} />
          <Route path="/curso/categoria/:id" element={<Cursos />} />
        </Routes>
        <Routes>
          {" "}
          <Route path="/reporte/:id" element={<ReporteCurso />} />
        </Routes>
        <Routes>
          {" "}
          <Route
            path="/desinscripcion/:id"
            element={<Desinscripcion />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
