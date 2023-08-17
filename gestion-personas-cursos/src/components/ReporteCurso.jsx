import React, { useState, useEffect } from "react";

function ReporteCurso({ cursoId }) {
  const [reporte, setReporte] = useState(null);

  useEffect(() => {
    async function fetchReporte() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/reporte/${cursoId}`
      );
      if (response.ok) {
        const reporteData = await response.json();
        setReporte(reporteData);
      }
    }

    fetchReporte();
  }, [cursoId]);

  if (!reporte) {
    return <p>Cargando reporte...</p>;
  }

  return (
    <div>
      <h2>Reporte del Curso {cursoId}</h2>
      <p>Total inscritos: {reporte.total_inscritos}</p>
      <p>Porcentaje Masculinos: {reporte.porcentaje_masculinos.toFixed(2)}%</p>
      <p>Porcentaje Femeninos: {reporte.porcentaje_femeninos.toFixed(2)}%</p>
    </div>
  );
}

export default ReporteCurso;
