import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://127.0.0.1:8000/api/"; // to do agregar .env

export const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [ordenAlfabetico, setOrdenAlfabetico] = useState("");
  const [ordenFecha, setOrdenFecha] = useState("");

  useEffect(() => {
    // let url = `${baseUrl}curso`;
    let url = `${baseUrl}curso/filtrar`;
    // if (categoriaSeleccionada && ordenAlfabetico) {
    //   url = `${baseUrl}curso/categoria/${categoriaSeleccionada}/alfabetico/${ordenAlfabetico}`;
    // } else if (categoriaSeleccionada === "" && categoriaSeleccionada) {
    //   url = `${baseUrl}curso/categoria/${categoriaSeleccionada}`;
    // } else if (ordenAlfabetico) {
    //   url = `${baseUrl}curso/alfabetico/${ordenAlfabetico}`;
    // }
    // if (ordenFecha) {
    //   url += `/fecha-creacion/${ordenFecha}`;
    // }

    const queryParams = [];
    if (categoriaSeleccionada) {
      queryParams.push(`categoria=${categoriaSeleccionada}`);
    }
    if (ordenAlfabetico) {
      queryParams.push(`ordenAlfabetico=${ordenAlfabetico}`);
    }
    if (ordenFecha) {
      queryParams.push(`ordenFecha=${ordenFecha}`);
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    // Si no hay filtros seleccionados, simplemente obtén todos los cursos
    if (queryParams.length === 0) {
      url = `${baseUrl}curso`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCursos(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [categoriaSeleccionada, ordenAlfabetico, ordenFecha]);

  const handleInscripcionClick = (cursoId) => {
    navigate(`/persona/${cursoId}`);
  };

  const handleEstadisticasClick = (cursoId) => {
    navigate(`/reporte/${cursoId}`);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const handleOrdenAlfabeticoChange = (event) => {
    setOrdenAlfabetico(event.target.value);
  };

  const handleOrdenFechaChange = (event) => {
    setOrdenFecha(event.target.value);
  };
  // const cursosFiltrados =
  //   categoriaSeleccionada === ""
  //     ? cursos
  //     : cursos.filter(
  //         (curso) => curso.nombre_categoria === categoriaSeleccionada
  //       );

  return (
    <div>
      <header>
        <h1 className="w100 pt jcc">Lista de Cursos</h1>
      </header>
      <div className="w100 df aic pb jcse">
        <div>
          <h2>Filtrar por:</h2>
        </div>
        <div className="df fdc aic">
          <label htmlFor="">Categoria</label>
          <select
            onChange={handleCategoriaChange}
            value={categoriaSeleccionada}
            class="ui dropdown"
          >
            <option value="">Selecciona una Categoria</option>
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
          </select>
        </div>
        <div className="df fdc aic">
          <label htmlFor="">Alfabeticamente</label>
          <select
            className="ui dropdown"
            onChange={handleOrdenAlfabeticoChange}
            value={ordenAlfabetico}
          >
            <option value="">Ordenar alfabeticamente</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className="df fdc aic">
          <label htmlFor="">Fecha</label>
          <select
            className="ui dropdown"
            onChange={handleOrdenFechaChange}
            value={ordenFecha}
          >
            <option value="">Ordenar por fecha</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>

      <div className="ui grid container jcc grid-container">
        <div className="">
          {/* <select
            onChange={handleCategoriaChange}
            value={categoriaSeleccionada}
          >
            <option value="">Seleccione una categoría</option>
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
          </select> */}
        </div>
        {cursos.map((curso) => (
          <div key={curso.id} className="four wide column bs br pdi grid-item">
            <h2>{curso.nombre}</h2>
            {categoriaSeleccionada === "" ? (
              <h3>Categoria: {curso.nombre_categoria}</h3>
            ) : (
              <h3>Categoria: {categoriaSeleccionada}</h3>
            )}
            <p>Descripcion: {curso.descripcion}</p>
            <button
              className="ui primary button"
              onClick={() => handleInscripcionClick(curso.id)}
            >
              Inscribirse
            </button>
            <button
              className="ui primary button"
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
