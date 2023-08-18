import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";
const baseUrl = "http://127.0.0.1:8000/api/"; // to do agregar .env
function Desinscripcion() {
  let { idCurso } = useParams();
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
  const [formData, setFormData] = useState({
    dni: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    dni: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    
    setErrorMessages(newErrorMessages);
    return isValid;
    }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFields(); // Agrega aquí la función de validació
    const dni = e.target.dni.value;

    if (isValid){
       const response = fetch(`${baseUrl}curso/${idCurso}/desinscripcion`, {
         method: "POST",
         body: JSON.stringify({
           dni: dni,
           curso_id: idCurso, // ID del curso obtenido de los parámetros
         }),
       });
        response.then((data) => {
            if (data.ok) {
              setIsModalOpen(true);
              setModalMessage("Persona eliminada del curso");
            }
            if (data.status === 404) {
              setIsModalOpen(true);
              setModalMessage("Persona no esta inscrita en el curso");
            }
        })
   }
}
  // etc...

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <input
          value={formData.dni}
          onChange={handleChange}
          name="dni"
          placeholder="Ingresa tu DNI"
        />
      </div>
      <div>
        <button className="negative ui button" type="submit">
          Confirmar desinscripción
        </button>
      </div>
      <div className="ui modal">
        <Modal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div style={{ padding: "30px" }}>
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
export default Desinscripcion;
