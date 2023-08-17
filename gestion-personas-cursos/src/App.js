import "./App.css";
import { Cursos } from "./components/cursos";
import FormRegister from "./components/FormRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReporteCurso from "./components/ReporteCurso";

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          {" "}
          <Route path="/persona/:id" element={<FormRegister />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/curso" element={<Cursos />} />
        </Routes>
        <Routes>
          {" "}
          <Route path="/reporte/:id" element={<ReporteCurso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
