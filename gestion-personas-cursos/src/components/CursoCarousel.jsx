import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api/"; // to do agregar .env

function CursoCarousel() {
  const [lastAddedCourses, setLastAddedCourses] = useState([]);

 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const navigate = useNavigate();
  useEffect(() => {
    
    fetch(`${baseUrl}curso/ultimos-5`)
      .then((response) => response.json())
      .then((data) => {
        setLastAddedCourses(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
 

    const handleSubmit = () => {
      navigate(`/curso`);
    };
  console.log(lastAddedCourses);
  return (
    <>
      <div className="carousel-container">
        <header className="h1C">
          <h1 className="">
            Bienvenidos a <span className="azul">CursosApp</span>
          </h1>
        </header>
        <h3 className="h3C">
          Checkea nuestros ultimos <span className="azul">cursos</span> abajo!
        </h3>
        <Carousel responsive={responsive}>
          {lastAddedCourses.map((curso) => (
            <div key={curso.id} className="carousel-slide">
              {" "}
              {/* Usa la clase específica del carrusel */}
              <h2 className="tic azul">{curso.nombre}</h2>
              {curso.id_categoria === 1 ? (
                <h3>Categoria: BACKEND</h3>
              ) : (
                <h3>Categoria: FRONTEND</h3>
              )}
              <p>Descripcion: {curso.descripcion}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="center-button bmt300">
        <button onClick={handleSubmit} className="ui primary button bmt300">
          Inscribite ya!
        </button>
      </div>
      <div></div>
    </>
  );
}

export default CursoCarousel;
