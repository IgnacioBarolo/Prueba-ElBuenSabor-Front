import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOut } from "react-icons/bi";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="boton"
      style={{ width: "50px" }}
    >
      <BiLogOut size="2em" />
    </button>
  );
};
