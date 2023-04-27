import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navbar } from "./Navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import MyForm from "./Formulario.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain="dev-3vjz2w101xgvwuhm.us.auth0.com"
    clientId="Usvqhgw7kWNFWAHIgaRq5CPXY38iYNxc"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
        {/* <Navbar />
        <MyForm /> */}
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);
