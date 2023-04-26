import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";

import "./navbar.css";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="circulo" onClick={() => loginWithRedirect()}>
      <FaUserCircle size="2em" />
    </div>
  );
};
