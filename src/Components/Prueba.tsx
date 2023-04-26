import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

function CustomDropdown() {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleClickOutside = (event: any) => {
    if (event.target.closest(".dropdown") === null) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Dropdown show={showMenu} onToggle={setShowMenu}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Menú
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Opción 1</Dropdown.Item>
        <Dropdown.Item href="#">Opción 2</Dropdown.Item>
        {isAuthenticated && (
          <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
