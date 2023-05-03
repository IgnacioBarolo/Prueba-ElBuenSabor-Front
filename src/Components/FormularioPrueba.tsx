import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
// import fs from "fs";
import "./Formulario.css";

class FormValues {
  constructor(public nombre: string = "", public estado: string = "") {}
}

export function FormNuevaCategoria() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const json = JSON.stringify(data);
    console.log(json);
    // fs.writeFile("rubros.json", json, (err) => {
    //   if (err) throw err;
    //   console.log("Los datos se han guardado en el archivo.");
    // });
    reset();
  };

  const handleCancel = () => {
    console.log("Formulario cancelado");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <h2 className="form-title">Nueva Categoría</h2>
        </div>
        <div className="inputs-container">
          <div className="input-container">
            <label className="label">Nombre:</label>
            <input
              type="text"
              {...register("nombre", { required: true })}
              className="input large-input"
            />
            {errors.nombre && (
              <span style={{ color: "red" }}>Este campo es requerido</span>
            )}
          </div>
          <div className="input-container">
            <label className="label">Estado:</label>
            <select
              {...register("estado", { required: true })}
              className="select large-input"
            >
              <option value="">Seleccionar estado</option>
              <option value="alta">Alta</option>
              <option value="baja">Baja</option>
            </select>
            {errors.estado && (
              <span style={{ color: "red" }}>Este campo es requerido</span>
            )}
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="button submit-button">
            Actualizar Categoria
          </button>
          <button
            type="button"
            className="button cancel-button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
