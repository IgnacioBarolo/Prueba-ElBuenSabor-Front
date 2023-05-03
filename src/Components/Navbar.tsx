import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import LogoElBuenSaborCircular from "../assets/LogoElBuenSabor.png";

import "./navbar.css";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <img
            style={{ width: "150px", height: "150px" }}
            src={LogoElBuenSaborCircular}
            className="logo"
            alt="El Buen Sabor logo"
          />
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/menu">Menú</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <FaSearch className="search-icon" color="black" />
          </div>
        </li>

        <li style={{ marginLeft: "auto" }}>
          {isAuthenticated ? (
            <>
              <Profile />
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </li>
        <li
          className="circulo"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        >
          <FaShoppingCart size="2em" />
        </li>
      </ul>
    </nav>
  );
};
