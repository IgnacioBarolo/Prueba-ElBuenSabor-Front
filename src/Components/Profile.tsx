import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div className="boton">
      {/* <img src={user?.picture} /> */}
      <FaUserCircle size="2em" />
      <p style={{ marginLeft: "10px" }}>{user?.name}</p>
      {/* <p style={{ marginLeft: "10px" }}>Email: {user?.email}</p> */}
    </div>
  ) : (
    <></>
  );
};
