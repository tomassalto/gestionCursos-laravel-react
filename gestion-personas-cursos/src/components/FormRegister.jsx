import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
const baseUrl = "http://127.0.0.1:8000/api/"; // to do agregar .env

function FormRegister() {
  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    edad: "",
    genero: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    edad: "",
    genero: "",
  });
  const customStyles = {
    content: {
      width: "80%", // Porcentaje del ancho
      maxWidth: "400px", // Máximo ancho
      margin: "auto",
      height: "20%",
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      overflow: "none",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
  };
  const [modalMessage, setModalMessage] = useState("");
  // const navigate = useNavigate();
  let { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  // const [redirectToHome, setRedirectToHome] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };
  const validateFields = () => {
    let isValid = true;
    const newErrorMessages = {};
    // Validar el campo DNI
    if (formData.dni.length < 8 || formData.dni.length > 9) {
      isValid = false;
      newErrorMessages.dni = "El DNI debe tener entre 8 y 9 dígitos";
    }
    // Validar el campo Nombre
    if (formData.nombre.trim() === "") {
      isValid = false;
      newErrorMessages.nombre = "El nombre es requerido";
    }
    // Validar el campo Apellido
    if (formData.apellido.trim() === "") {
      isValid = false;
      newErrorMessages.apellido = "El apellido es requerido";
    }
    // Validar el campo Edad
    const edad = parseInt(formData.edad);
    if (isNaN(edad) || edad < 13 || edad > 99) {
      isValid = false;
      newErrorMessages.edad = "La edad debe estar entre 13 y 99 años";
    }
    // Validar el campo Género
    if (formData.genero === "") {
      isValid = false;
      newErrorMessages.genero = "Seleccione un género";
    }
    setErrorMessages(newErrorMessages);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateFields(); // Agrega aquí la función de validación

    if (isValid) {
      const registerPersona = fetch(`${baseUrl}persona`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dni: formData.dni,
          nombre: formData.nombre,
          apellido: formData.apellido,
          edad: formData.edad,
          genero: formData.genero,
        }),
      });
      registerPersona
        .then((response) => {
          if (response.ok) {
            return fetch(`${baseUrl}inscripcion`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                dni: formData.dni,
                curso_id: id, // ID del curso obtenido de los parámetros
              }),
            });
          } else {
            console.log("error en al inscripcion")
          }
        })
        .then((secondResponse) => {
          if (secondResponse.ok) {
            console.log("Inscripción exitosa");
          }
          if (secondResponse.status === 409) {
            setIsModalOpen(true);
            setModalMessage("Persona ya inscrita en el curso");
          }
           if (secondResponse.status === 422) {
            setIsModalOpen(true);
            setModalMessage("Persona ya inscrita en 3 cursos");
           }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>
          DNI:
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
          {errorMessages.dni && <p className="error">{errorMessages.dni}</p>}
        </label>
      </div>
      <div className="field">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errorMessages.nombre && (
            <p className="error">{errorMessages.nombre}</p>
          )}
        </label>
      </div>
      <div className="field">
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          {errorMessages.apellido && (
            <p className="error">{errorMessages.apellido}</p>
          )}
        </label>
      </div>
      <div className="field">
        <label>
          Edad:
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
          {errorMessages.edad && <p className="error">{errorMessages.edad}</p>}
        </label>
      </div>
      <div className="field">
        <label>
          Género:
          <select name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </label>
        {errorMessages.genero && (
          <p className="error">{errorMessages.genero}</p>
        )}
      </div>
      <button class="ui primary button">Registrar</button>
      {/* Modal para mostrar el mensaje de persona ya inscrita */}
      <div className="ui modal">
        <Modal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div style={{padding: "30px"}}>
            <h2 className="w100 jcc pt error">Error de inscripción</h2>
            <p className="">{modalMessage}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                class="ui primary button"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </form>
  );
}

export default FormRegister;
