import { Navbar } from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
// import MyForm from "./Formulario.tsx";
import { FormNuevaCategoria } from "./FormularioPrueba.tsx";
import "./App.css";

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        <Navbar />
        {isAuthenticated ? (
          <>
            <FormNuevaCategoria />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
