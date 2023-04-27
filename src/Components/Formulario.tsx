import React, { useState } from "react";
import "./Formulario.css";

interface FormData {
  name: string;
  estado: boolean; // Añadimos un campo para el género
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    estado: false, // Inicializamos el campo del género en blanco
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Rubro</h2>
        <label>
          Nombre:
          <input
            className="imput-form"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>

        <label>
          Estado: {/* Agregamos un nuevo campo para el género */}
          <select name="estado" onChange={handleChange}>
            <option value="male">Alta</option>
            <option value="female">Baja</option>
          </select>
        </label>
        <button className="boton-enviar" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default MyForm;
