import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ReporteCurso({ }) {
  const [reporte, setReporte] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    async function fetchReporte() {
      const response = await fetch(`http://127.0.0.1:8000/api/reporte/${id}`);
      if (response.ok) {
        const reporteData = await response.json();
        setReporte(reporteData);
      }
    }

    fetchReporte();
  }, []);

  if (!reporte) {
    return <p>Cargando reporte...</p>;
  }

  return (
    <div>
      <h2>Reporte del Curso {id}</h2>
      <p>Total inscritos: {reporte.total_inscritos}</p>
      <p>Porcentaje Masculinos: {reporte.porcentaje_masculinos.toFixed(2)}%</p>
      <p>Porcentaje Femeninos: {reporte.porcentaje_femeninos.toFixed(2)}%</p>
      <p>Porcentaje Mayor de edad: {reporte.porcentaje_mayores.toFixed(2)}%</p>
      <p>Porcentaje Menor de edad: {reporte.porcentaje_menores.toFixed(2)}%</p>
    </div>
  );
}

export default ReporteCurso;
