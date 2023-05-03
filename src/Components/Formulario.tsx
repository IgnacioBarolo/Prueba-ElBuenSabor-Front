import React, { useState } from "react";
import "./Formulario.css";

interface Rubros {
  name: string;
  status: "alta" | "baja";
}

const initialValues: Rubros = {
  name: "",
  status: "alta",
};

const MyForm: React.FC = () => {
  const [Rubros, setRubros] = useState<Rubros>(initialValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRubros({
      ...Rubros,
      name: event.target.value,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRubros({
      ...Rubros,
      status: event.target.value as "alta" | "baja",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Rubros);
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
            onChange={handleInputChange}
          />
        </label>

        <label>
          Estado:
          <select
            name="estado"
            value={Rubros.status}
            onChange={handleSelectChange}
          >
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
