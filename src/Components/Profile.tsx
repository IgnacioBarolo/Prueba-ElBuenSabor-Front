import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import { NavDropdown, Dropdown } from "react-bootstrap";
import { LogoutButton } from "./Logout";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    // <div className="boton">
    //   {/* <img src={user?.picture} /> */}
    //   <FaUserCircle size="2em" />
    //   <p style={{ marginLeft: "10px" }}>{user?.name}</p>
    //   {/* <p style={{ marginLeft: "10px" }}>Email: {user?.email}</p> */}
    // </div>

    // <div>
    //   <ul className="dropdown" id="menu">
    //     <li className="dropdown__list">
    //       <a href="#" className="dropdown__link">
    //         {/* <img src="./assets/projects.svg" className="dropdown__icon" /> */}
    //         <FaUserCircle size="2em" />
    //         <span className="dropdown__span">{user?.name}</span>
    //         <input type="checkbox" className="dropdown__check" />
    //       </a>
    //       <div className="dropdown__content">
    //         <ul className="dropdown__sub">
    //           <li className="dropdown__li">
    //             <a href="#" className="dropdown__anchor">
    //               Project 1
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    // <ul>
    //   <li>
    //     <a href="#">Languages ▾</a>
    //     <ul className="dropdown">
    //       <li>
    //         <a href="#">HTML</a>
    //       </li>
    //       <li>
    //         <a href="#">CSS</a>
    //       </li>
    //       <li>
    //         <a href="#">JavaScript</a>
    //       </li>
    //       <li>
    //         <a href="#">PHP</a>
    //       </li>
    //     </ul>
    //   </li>
    // </ul>
    // <NavDropdown title={user?.name} className=" iconoUser  dropdown-menu-right">
    //   <NavDropdown.Item href="#action4" className="text-truncate">
    //     <p> Perfil</p>
    //   </NavDropdown.Item>
    //   <NavDropdown.Divider />
    //   <NavDropdown.Item href="#action5">
    //     <LogoutButton />
    //   </NavDropdown.Item>
    // </NavDropdown>

    <Dropdown className="primary">
      <Dropdown.Toggle>
        <FaUserCircle size="2em" style={{ marginRight: "13px" }} />
        {user?.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item> */}
        <Dropdown.Item href="#/action-2">
          <LogoutButton />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    // <NavDropdown
    //   title={user?.name}
    //   id="navbarScrollingDropdown"
    //   className="navUserMenuContainer p-2"
    // >
    //   <NavDropdown.Item href="#action1">
    //     <p> Perfil</p>
    //   </NavDropdown.Item>
    //   <NavDropdown.Divider />
    //   <NavDropdown.Item href="#action2">
    //     <LogoutButton />
    //   </NavDropdown.Item>
    // </NavDropdown>
    <></>
  );
};
