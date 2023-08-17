import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://127.0.0.1:8000/api/"; // to do agregar .env

export const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Realiza la solicitud para obtener los cursos de la base de datos
    fetch(`${baseUrl}curso`)
      .then((response) => response.json())
      .then((data) => {
        setCursos(data); // Almacena los cursos en el estado
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleInscripcionClick = (cursoId) => { 

   navigate(`/persona/${cursoId}`)
  };

  const handleEstadisticasClick = (cursoId) => {
    navigate(`/reporte/${cursoId}`);
  };
  return (
    <div>
      <header>
        <h1 className="w100 pt jcc">Lista de Cursos</h1>
      </header>
      <div class="ui grid container jcc grid-container">
        {cursos.map((curso) => (
          <div key={curso.id} className="four wide column bs br pdi grid-item">
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <button
              class="ui primary button"
              onClick={() => handleInscripcionClick(curso.id)}
            >
              Inscribirse
            </button>
            <button
              class="ui primary button"
              onClick={() => handleEstadisticasClick(curso.id)}
            >
              Estadisticas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
