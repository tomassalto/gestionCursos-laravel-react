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
    return (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Loading</div>
        </div>      
      </div>
    );
  }
 
  return (
    <>
      <div>
        {reporte.total_inscritos === 0 ? (
          <h1 className="w100 pt jcc">
            No hay inscritos en el curso {reporte.curso_nombre} todavía.
          </h1>
        ) : (
          <div className="grid-item">
            <h2>
              Estadisticas del Curso:{" "}
              <span className="azul">{reporte.curso_nombre.nombre}</span>
            </h2>
            <p className="fwb">Total inscritos: {reporte.total_inscritos}</p>
            <p className="fwb">
              Porcentaje Masculinos:{" "}
              {reporte.porcentaje_masculinos
                ? reporte.porcentaje_masculinos.toFixed(2)
                : 0}
              %
            </p>
            <p className="fwb">
              Porcentaje Femeninos:{" "}
              {reporte.porcentaje_femeninos
                ? reporte.porcentaje_femeninos.toFixed(2)
                : 0}
              %
            </p>
            <p className="fwb">
              Porcentaje Mayor de edad:{" "}
              {reporte.porcentaje_mayores
                ? reporte.porcentaje_mayores.toFixed(2)
                : 0}
              %
            </p>
            <p className="fwb">
              Porcentaje Menor de edad:{" "}
              {reporte.porcentaje_menores
                ? reporte.porcentaje_menores.toFixed(2)
                : 0}
              %
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default ReporteCurso;
